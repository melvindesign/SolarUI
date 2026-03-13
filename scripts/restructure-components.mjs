import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, basename } from 'path'

const COMPONENTS_DIR = '/Users/melvinensellem/Documents/SolarUI/content/components'

const files = readdirSync(COMPONENTS_DIR)
  .filter(f => f.endsWith('.mdx'))
  .sort()

let succeeded = 0
let failed = 0

for (const file of files) {
  const filepath = join(COMPONENTS_DIR, file)
  const componentName = basename(file, '.mdx')
  const content = readFileSync(filepath, 'utf-8')

  try {
    const transformed = transformFile(content, componentName)
    writeFileSync(filepath, transformed, 'utf-8')
    console.log(`✓ ${file}`)
    succeeded++
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`)
    failed++
  }
}

console.log(`\nDone: ${succeeded} succeeded, ${failed} failed`)

// ─── Main transform ───────────────────────────────────────────────────────────

function transformFile(content, componentName) {
  // 1. Extract frontmatter
  const fmMatch = content.match(/^---\n[\s\S]*?\n---\n/)
  if (!fmMatch) throw new Error('No frontmatter found')
  const frontmatter = fmMatch[0]
  const afterFm = content.slice(frontmatter.length)

  // 2. Find boundary between imports and content
  //    Prefer H1; fall back to first H2 for files without an explicit title heading
  const lines = afterFm.split('\n')
  let splitIdx = lines.findIndex(l => l.startsWith('# '))
  if (splitIdx === -1) {
    // No H1 — scan only the top-level import block (stop at first non-blank, non-import line)
    splitIdx = 0
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        splitIdx = i + 1 // move boundary after this import line
      } else if (lines[i].trim() !== '') {
        break // first real content line — stop here
      }
    }
  }

  let importBlock = lines.slice(0, splitIdx).join('\n').trim()
  const fromH1 = lines.slice(splitIdx).join('\n')

  // 3. Update import block
  //    — merge Tabs into existing nextra/components import (or add it)
  //    — alias as DocsTabs if 'Tabs' is already imported from a UI component
  //    — add CollapsibleCode import
  const tabsConflict =
    !importBlock.includes("from 'nextra/components'") &&
    /import\s*\{[^}]*\bTabs\b[^}]*\}/.test(importBlock)
  const tabsName = tabsConflict ? 'DocsTabs' : 'Tabs'
  const tabsImportSpec = tabsConflict ? 'Tabs as DocsTabs' : 'Tabs'

  if (importBlock.includes("from 'nextra/components'")) {
    const nextraMatch = importBlock.match(/import\s*\{\s*([^}]+)\s*\}\s*from\s*'nextra\/components'/)
    const existing = nextraMatch
      ? nextraMatch[1].split(',').map(s => s.trim()).filter(Boolean)
      : []
    const merged = [...new Set([tabsImportSpec, ...existing])].sort()
    importBlock = importBlock.replace(
      /import\s*\{\s*[^}]+\s*\}\s*from\s*'nextra\/components'/,
      `import { ${merged.join(', ')} } from 'nextra/components'`
    )
  } else {
    importBlock += `\nimport { ${tabsImportSpec} } from 'nextra/components'`
  }

  // 4. Split fromH1 on H2 section boundaries
  const parts = fromH1.split(/\n(?=## )/)
  const preamble = parts[0].trimEnd()

  const sections = {}
  for (const part of parts.slice(1)) {
    const firstLine = part.split('\n')[0]       // "## Installation"
    const name = firstLine.slice(3).trim()       // "Installation"
    const body = part.slice(firstLine.length + 1).trim()
    sections[name] = body
  }

  // 5. Build each tab's content

  // — Usage tab: Usage + Examples
  const usageContent = sections['Usage'] || ''
  const examplesContent = sections['Examples'] || ''
  let usageTab = usageContent.trimEnd()
  if (examplesContent) {
    usageTab += '\n\n## Examples\n\n' + examplesContent.trimEnd()
  }

  // — Installation tab: CLI block + CollapsibleCode
  const installContent = sections['Installation'] || ''
  const processedInstall = addFilenamesAndCopy(installContent, componentName)
  const cliBlock =
    '```bash filename="terminal" copy\n' +
    `npx shadcn@latest add http://localhost:3000/r/${componentName}.json\n` +
    '```'
  let installTab = '### Via CLI\n\n' + cliBlock
  if (processedInstall.trim()) {
    installTab += '\n\n---\n\n### Manual\n\n' + processedInstall.trim()
  }

  // — API tab
  const apiTab = (sections['API Reference'] || '').trimEnd()

  // 6. Reconstruct with Tabs wrapper (use DocsTabs if Tabs name was aliased)
  const T = tabsName
  const tabs =
    `<${T} items={['Usage', 'Installation', 'API']}>\n\n` +
    `<${T}.Tab>\n\n${usageTab.trim()}\n\n</${T}.Tab>\n\n` +
    `<${T}.Tab>\n\n${installTab}\n\n</${T}.Tab>\n\n` +
    `<${T}.Tab>\n\n${apiTab}\n\n</${T}.Tab>\n\n` +
    `</${T}>`

  return `${frontmatter}\n${importBlock}\n\n${preamble}\n\n${tabs}\n`
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Walk through installation content line-by-line and add filename + copy
 * attributes to any opening code fences that don't already have them.
 */
function addFilenamesAndCopy(content, componentName) {
  const lines = content.split('\n')
  const result = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Opening fence with only a language token (no extra attrs yet)
    const simpleFence = line.match(/^```(tsx?|jsx?|bash|sh|css|json)$/)
    if (simpleFence) {
      const lang = simpleFence[1]

      if (lang === 'bash' || lang === 'sh') {
        result.push(`\`\`\`${lang} filename="terminal" copy`)
      } else {
        // Check next line for an inline filename comment: // components/ui/foo.tsx
        const next = lines[i + 1] ?? ''
        const commentMatch = next.match(/^\/\/ (.+\.(tsx?|jsx?|ts|js))$/)
        if (commentMatch) {
          result.push(`\`\`\`${lang} filename="${commentMatch[1]}" copy`)
          i++ // skip the comment line — it's now in the fence header
        } else {
          const filename =
            lang === 'css' ? 'src/app/globals.css'
            : lang === 'json' ? 'components.json'
            : `components/ui/${componentName}.tsx`
          result.push(`\`\`\`${lang} filename="${filename}" copy`)
        }
      }
    } else {
      result.push(line)
    }
  }

  return result.join('\n')
}
