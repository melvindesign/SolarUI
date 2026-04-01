#!/usr/bin/env bash
# =============================================================================
# test-registry.sh — SolarUI registry component tester (CI)
#
# Usage:
#   ./scripts/test-registry.sh --workdir <path> --url <registry-url> [options]
#
# Required:
#   --workdir <path>    Path to an existing Next.js project (created by CI workflow)
#   --url <url>         Registry URL (Vercel deployment URL)
#
# Options:
#   --component <name>  Restrict to a single component
#
# Environment variables:
#   VERCEL_AUTOMATION_BYPASS_SECRET   Bypass token for protected Vercel deployments
#
# Examples:
#   ./scripts/test-registry.sh \
#     --workdir /tmp/solar-registry-test \
#     --url https://my-project-abc123.vercel.app
# =============================================================================

set -euo pipefail

# ---------------------------------------------------------------------------
# Colors
# ---------------------------------------------------------------------------
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
GRAY='\033[0;90m'
NC='\033[0m'

log()    { echo -e "${GRAY}[test-registry]${NC} $*"; }
ok()     { echo -e "${GREEN}✓${NC} $*"; }
fail()   { echo -e "${RED}✗${NC} $*"; }
info()   { echo -e "${BLUE}→${NC} $*"; }
warn()   { echo -e "${YELLOW}!${NC} $*"; }
header() { echo -e "\n${BLUE}━━━ $* ━━━${NC}"; }

# ---------------------------------------------------------------------------
# Parse arguments
# ---------------------------------------------------------------------------
WORK_DIR=""
TARGET_URL=""
SINGLE_COMPONENT=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --workdir)   WORK_DIR="$2";          shift 2 ;;
    --url)       TARGET_URL="$2";        shift 2 ;;
    --component) SINGLE_COMPONENT="$2"; shift 2 ;;
    *) fail "Unknown option: $1"; exit 1 ;;
  esac
done

[[ -z "$WORK_DIR" ]]   && { fail "--workdir is required"; exit 1; }
[[ -z "$TARGET_URL" ]] && { fail "--url is required";     exit 1; }
[[ -d "$WORK_DIR" ]]   || { fail "Directory not found: ${WORK_DIR}"; exit 1; }

REPORT_FILE="${WORK_DIR}/test-registry-report.md"

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
_registry_url() {
  local url="$1"
  local token="${VERCEL_AUTOMATION_BYPASS_SECRET:-}"
  if [[ -n "$token" ]]; then
    echo "${url}?x-vercel-protection-bypass=${token}"
  else
    echo "${url}"
  fi
}

# ---------------------------------------------------------------------------
# Setup: init shadcn, configure registry alias, commit baseline
# ---------------------------------------------------------------------------
cmd_setup() {
  header "Setup"

  cd "${WORK_DIR}"

  info "Initializing shadcn..."
  npx --yes shadcn@latest init -d 2>&1 | tail -5

  rm -f "${WORK_DIR}/components/ui/button.tsx"
  log "Removed default button.tsx from shadcn init"

  local token="${VERCEL_AUTOMATION_BYPASS_SECRET:-}"
  local reg_url="${TARGET_URL}/r/{name}.json"
  [[ -n "$token" ]] && reg_url="${TARGET_URL}/r/{name}.json?x-vercel-protection-bypass=${token}"

  info "Configuring @solar-ui registry alias → ${reg_url}"
  node -e "
    const fs = require('fs');
    const cfg = JSON.parse(fs.readFileSync('${WORK_DIR}/components.json', 'utf8'));
    cfg.registries = cfg.registries || {};
    cfg.registries['@solar-ui'] = '${reg_url}';
    fs.writeFileSync('${WORK_DIR}/components.json', JSON.stringify(cfg, null, 2) + '\n');
  "

  # Commit baseline so git cleanup works between components
  git -C "${WORK_DIR}" add -A
  git -C "${WORK_DIR}" commit -m "chore: init shadcn baseline" --no-verify 2>/dev/null || true

  ok "Setup complete"
}

# ---------------------------------------------------------------------------
# List: fetch component names from the registry
# ---------------------------------------------------------------------------
cmd_list() {
  header "Fetching component list" >&2
  info "Registry: ${TARGET_URL}/r/registry.json" >&2

  local json
  json="$(curl -sf "$(_registry_url "${TARGET_URL}/r/registry.json")")" || {
    fail "Could not fetch ${TARGET_URL}/r/registry.json" >&2
    exit 1
  }

  echo "$json" | node -e "
    let d = '';
    process.stdin.on('data', c => d += c);
    process.stdin.on('end', () => {
      let data;
      try { data = JSON.parse(d); } catch(e) {
        process.stderr.write('Invalid JSON from registry.json\n');
        process.exit(1);
      }
      const items = Array.isArray(data) ? data : (data.items || []);
      items.forEach(c => console.log(c.name));
    });
  "
}

# ---------------------------------------------------------------------------
# Install: install a single component via shadcn
# ---------------------------------------------------------------------------
cmd_install() {
  local name="$1"
  header "Installing: ${name}"
  info "Source: ${TARGET_URL}/r/${name}.json  (alias: @solar-ui/${name})"
  npx shadcn@latest add "@solar-ui/${name}" --yes --overwrite 2>&1
  ok "Installed: ${name}"
}

# ---------------------------------------------------------------------------
# Build: run next build
# ---------------------------------------------------------------------------
cmd_build() {
  header "Building"
  if npm run build 2>&1; then
    ok "Build succeeded"
    return 0
  else
    fail "Build failed"
    return 1
  fi
}

# ---------------------------------------------------------------------------
# Cleanup: reset WORK_DIR to baseline between component tests
# ---------------------------------------------------------------------------
cmd_cleanup() {
  header "Cleanup"

  git -C "${WORK_DIR}" checkout -- . 2>/dev/null || true
  git -C "${WORK_DIR}" clean -fd components/ lib/ hooks/ 2>/dev/null || true

  if [[ -n "$(git -C "${WORK_DIR}" diff HEAD -- package.json package-lock.json 2>/dev/null)" ]]; then
    info "Restoring dependencies..."
    npm --prefix "${WORK_DIR}" install --silent
  fi

  ok "Cleanup done — ready for next component"
}

# ---------------------------------------------------------------------------
# Run: full automated loop
# ---------------------------------------------------------------------------
cmd_run() {
  local pass=0
  local fail_count=0
  local skipped=0

  cmd_setup

  local components=()
  if [[ -n "$SINGLE_COMPONENT" ]]; then
    components=("$SINGLE_COMPONENT")
  else
    local list_output
    list_output="$(cmd_list)" || { fail "Failed to fetch component list"; exit 1; }
    while IFS= read -r line; do
      [[ -n "$line" ]] && components+=("$line")
    done <<< "$list_output"
  fi

  [[ ${#components[@]} -eq 0 ]] && { fail "No components found at ${TARGET_URL}"; exit 1; }

  info "Found ${#components[@]} component(s) to test"
  info "Registry: ${TARGET_URL}"

  {
    echo "# Registry Test Report"
    echo ""
    echo "- **Date**: $(date '+%Y-%m-%d %H:%M:%S')"
    echo "- **Registry**: ${TARGET_URL}"
    echo ""
    echo "## Results"
    echo ""
    echo "| Component | Build | Notes |"
    echo "|-----------|-------|-------|"
  } > "${REPORT_FILE}"

  cd "${WORK_DIR}"

  for component in "${components[@]}"; do
    local build_status="❌"
    local notes=""

    if ! cmd_install "${component}" 2>&1; then
      notes="Install failed"
      warn "Install failed for ${component}, skipping build"
      ((skipped++)) || true
    else
      if npm run build 2>&1; then
        build_status="✅"
        ((pass++)) || true
      else
        ((fail_count++)) || true
        notes="Build failed"
      fi
    fi

    echo "| \`${component}\` | ${build_status} | ${notes} |" >> "${REPORT_FILE}"
    cmd_cleanup
  done

  # Final test: all components installed together
  if [[ ${#components[@]} -gt 1 && -z "$SINGLE_COMPONENT" ]]; then
    header "Final test: all components together"
    for component in "${components[@]}"; do
      cmd_install "${component}" 2>&1 || true
    done

    local all_status="❌" all_notes=""
    if npm run build 2>&1; then
      all_status="✅"
    else
      all_notes="Build failed"
    fi

    {
      echo ""
      echo "## All Components Together"
      echo ""
      echo "| Test | Build | Notes |"
      echo "|------|-------|-------|"
      echo "| all components | ${all_status} | ${all_notes} |"
    } >> "${REPORT_FILE}"
  fi

  {
    echo ""
    echo "## Summary"
    echo ""
    echo "- ✅ Passed: ${pass}"
    echo "- ❌ Failed: ${fail_count}"
    echo "- ⚠️  Skipped: ${skipped}"
    echo "- **Total**: ${#components[@]}"
  } >> "${REPORT_FILE}"

  header "Summary"
  ok  "Passed:  ${pass}"
  [[ $fail_count -gt 0 ]] && fail "Failed:  ${fail_count}" || true
  [[ $skipped -gt 0 ]]    && warn "Skipped: ${skipped}"   || true
  info "Total:   ${#components[@]}"
  info "Report:  ${REPORT_FILE}"

  echo ""
  cat "${REPORT_FILE}"

  [[ $fail_count -gt 0 ]] && exit 1 || exit 0
}

# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------
cmd_run
