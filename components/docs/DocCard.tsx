import Link from 'next/link'
import React from 'react'

const s = {
  xmlns: 'http://www.w3.org/2000/svg' as const,
  viewBox: '0 0 80 48' as const,
  fill: 'none' as const,
  stroke: 'currentColor' as const,
  strokeWidth: 1.5 as const,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'w-full h-full',
}

const illustrations: Record<string, React.ReactElement> = {
  // ── Section entries ──────────────────────────────────────────
  'getting-started': (
    <svg {...s}>
      <circle cx="40" cy="24" r="18" />
      <polygon points="35,17 35,31 51,24" />
    </svg>
  ),
  'components-section': (
    <svg {...s}>
      <rect x="8" y="8" width="26" height="16" rx="4" />
      <rect x="46" y="8" width="26" height="16" rx="4" />
      <rect x="8" y="32" width="26" height="8" rx="4" />
      <rect x="46" y="32" width="26" height="8" rx="4" />
    </svg>
  ),
  'foundation-section': (
    <svg {...s}>
      <rect x="12" y="34" width="56" height="6" rx="3" />
      <rect x="18" y="24" width="44" height="6" rx="3" />
      <rect x="24" y="14" width="32" height="6" rx="3" />
    </svg>
  ),
  introduction: (
    <svg {...s}>
      <rect x="16" y="6" width="48" height="40" rx="4" />
      <line x1="24" y1="16" x2="56" y2="16" />
      <line x1="24" y1="22" x2="56" y2="22" />
      <line x1="24" y1="28" x2="48" y2="28" />
      <line x1="24" y1="34" x2="44" y2="34" />
    </svg>
  ),
  installation: (
    <svg {...s}>
      <rect x="8" y="8" width="64" height="36" rx="4" />
      <polyline points="13,15 17,18 13,21" />
      <line x1="20" y1="18" x2="48" y2="18" />
      <polyline points="13,23 17,26 13,29" />
      <line x1="20" y1="26" x2="58" y2="26" />
      <polyline points="13,31 17,34 13,37" />
      <line x1="20" y1="34" x2="40" y2="34" />
    </svg>
  ),
  mcp: (
    <svg {...s}>
      <circle cx="40" cy="24" r="6" />
      <circle cx="16" cy="12" r="4" />
      <circle cx="64" cy="12" r="4" />
      <circle cx="16" cy="36" r="4" />
      <circle cx="64" cy="36" r="4" />
      <line x1="20" y1="14" x2="35" y2="20" />
      <line x1="60" y1="14" x2="45" y2="20" />
      <line x1="20" y1="34" x2="35" y2="28" />
      <line x1="60" y1="34" x2="45" y2="28" />
    </svg>
  ),
  changelog: (
    <svg {...s}>
      <rect x="12" y="4" width="56" height="42" rx="4" />
      <line x1="20" y1="14" x2="36" y2="14" />
      <line x1="20" y1="22" x2="60" y2="22" />
      <line x1="20" y1="28" x2="52" y2="28" />
      <line x1="20" y1="34" x2="60" y2="34" />
      <line x1="20" y1="40" x2="44" y2="40" />
    </svg>
  ),
  colors: (
    <svg {...s}>
      {/* Centers form equilateral triangle, d≈14 so circles properly overlap */}
      <circle cx="33" cy="28" r="11" />
      <circle cx="47" cy="28" r="11" />
      <circle cx="40" cy="16" r="11" />
    </svg>
  ),
  typography: (
    <svg {...s}>
      <line x1="12" y1="24" x2="68" y2="24" />
      <line x1="20" y1="30" x2="60" y2="30" />
      <line x1="16" y1="18" x2="64" y2="18" />
    </svg>
  ),
  'composing-palettes': (
    <svg {...s}>
      <rect x="8" y="8" width="16" height="16" rx="3" />
      <rect x="28" y="8" width="16" height="16" rx="3" />
      <rect x="48" y="8" width="16" height="16" rx="3" />
      <rect x="18" y="28" width="16" height="16" rx="3" />
      <rect x="38" y="28" width="16" height="16" rx="3" />
    </svg>
  ),
  direction: (
    <svg {...s}>
      <line x1="40" y1="8" x2="40" y2="40" />
      <line x1="8" y1="24" x2="72" y2="24" />
      <polyline points="33,15 40,8 47,15" />
      <polyline points="65,17 72,24 65,31" />
    </svg>
  ),
  'aspect-ratio': (
    <svg {...s}>
      <rect x="12" y="10" width="56" height="28" rx="3" />
      <line x1="12" y1="38" x2="6" y2="44" />
      <line x1="68" y1="38" x2="74" y2="44" />
      <line x1="6" y1="44" x2="74" y2="44" />
    </svg>
  ),
  resizable: (
    <svg {...s}>
      <rect x="8" y="8" width="64" height="36" rx="4" />
      <line x1="40" y1="8" x2="40" y2="44" />
      <polyline points="36,22 40,18 44,22" />
      <polyline points="36,30 40,34 44,30" />
    </svg>
  ),
  'scroll-area': (
    <svg {...s}>
      <rect x="8" y="6" width="64" height="38" rx="4" />
      <line x1="16" y1="14" x2="56" y2="14" />
      <line x1="16" y1="20" x2="56" y2="20" />
      <line x1="16" y1="26" x2="56" y2="26" />
      <line x1="16" y1="32" x2="48" y2="32" />
      <rect x="66" y="10" width="4" height="14" rx="2" />
    </svg>
  ),

  // ── Action ───────────────────────────────────────────────────
  button: (
    <svg {...s}>
      <rect x="20" y="16" width="40" height="16" rx="8" />
      <line x1="32" y1="24" x2="48" y2="24" />
    </svg>
  ),
  'button-group': (
    <svg {...s}>
      <rect x="6" y="16" width="28" height="16" rx="6" />
      <rect x="46" y="16" width="28" height="16" rx="6" />
      <line x1="12" y1="24" x2="28" y2="24" />
      <line x1="52" y1="24" x2="68" y2="24" />
    </svg>
  ),
  toggle: (
    <svg {...s}>
      {/* Inactive state */}
      <rect x="6" y="17" width="28" height="14" rx="3" />
      <line x1="12" y1="24" x2="28" y2="24" />
      {/* Active state — inner rect indicates pressed */}
      <rect x="46" y="17" width="28" height="14" rx="3" />
      <rect x="49" y="20" width="22" height="8" rx="2" />
      <line x1="52" y1="24" x2="68" y2="24" />
    </svg>
  ),
  'toggle-group': (
    <svg {...s}>
      <rect x="4" y="16" width="32" height="16" rx="6" />
      <rect x="44" y="16" width="32" height="16" rx="6" />
      <line x1="10" y1="24" x2="30" y2="24" />
      <line x1="50" y1="24" x2="70" y2="24" />
    </svg>
  ),

  // ── Form ─────────────────────────────────────────────────────
  field: (
    <svg {...s}>
      <line x1="8" y1="12" x2="30" y2="12" />
      <rect x="8" y="20" width="64" height="16" rx="4" />
      <line x1="14" y1="28" x2="28" y2="28" />
    </svg>
  ),
  input: (
    <svg {...s}>
      <rect x="8" y="16" width="64" height="16" rx="4" />
      <line x1="14" y1="24" x2="28" y2="24" />
    </svg>
  ),
  'input-group': (
    <svg {...s}>
      <rect x="8" y="16" width="64" height="16" rx="4" />
      <line x1="26" y1="16" x2="26" y2="32" />
      <circle cx="17" cy="24" r="4" />
    </svg>
  ),
  'input-otp': (
    <svg {...s}>
      {/* 4 equal boxes (w=12) with equal gaps (5px), margins 8px each side */}
      <rect x="9" y="16" width="12" height="16" rx="3" />
      <rect x="26" y="16" width="12" height="16" rx="3" />
      <rect x="43" y="16" width="12" height="16" rx="3" />
      <rect x="60" y="16" width="12" height="16" rx="3" />
    </svg>
  ),
  textarea: (
    <svg {...s}>
      <rect x="8" y="8" width="64" height="32" rx="4" />
      <line x1="16" y1="18" x2="52" y2="18" />
      <line x1="16" y1="24" x2="60" y2="24" />
      <line x1="16" y1="30" x2="40" y2="30" />
    </svg>
  ),
  checkbox: (
    <svg {...s}>
      <rect x="28" y="16" width="14" height="14" rx="3" />
      <polyline points="31,23 34,26 40,19" />
      <line x1="48" y1="23" x2="64" y2="23" />
    </svg>
  ),
  'radio-group': (
    <svg {...s}>
      <circle cx="20" cy="18" r="5" />
      <circle cx="20" cy="18" r="2" fill="currentColor" />
      <line x1="30" y1="18" x2="56" y2="18" />
      <circle cx="20" cy="30" r="5" />
      <line x1="30" y1="30" x2="48" y2="30" />
    </svg>
  ),
  switch: (
    <svg {...s}>
      <rect x="24" y="17" width="32" height="14" rx="7" />
      <circle cx="49" cy="24" r="5" />
    </svg>
  ),
  slider: (
    <svg {...s}>
      <line x1="8" y1="24" x2="72" y2="24" />
      <circle cx="44" cy="24" r="6" />
      <line x1="8" y1="24" x2="38" y2="24" strokeWidth="3" />
    </svg>
  ),
  select: (
    <svg {...s}>
      <rect x="8" y="16" width="64" height="16" rx="4" />
      <line x1="14" y1="24" x2="48" y2="24" />
      <polyline points="58,21 63,24 58,27" transform="rotate(90,61,24)" />
    </svg>
  ),
  combobox: (
    <svg {...s}>
      <rect x="8" y="16" width="64" height="16" rx="4" />
      <circle cx="19" cy="24" r="4" />
      <line x1="22" y1="27" x2="25" y2="30" />
      <line x1="32" y1="24" x2="50" y2="24" />
      <polyline points="58,21 63,24 58,27" transform="rotate(90,61,24)" />
    </svg>
  ),
  'date-picker': (
    <svg {...s}>
      <rect x="10" y="8" width="60" height="36" rx="4" />
      <line x1="10" y1="20" x2="70" y2="20" />
      <line x1="24" y1="8" x2="24" y2="20" />
      <line x1="56" y1="8" x2="56" y2="20" />
      <rect x="16" y="26" width="8" height="6" rx="1" />
      <rect x="30" y="26" width="8" height="6" rx="1" />
      <rect x="44" y="26" width="8" height="6" rx="1" />
      <rect x="58" y="26" width="8" height="6" rx="1" />
    </svg>
  ),

  // ── Feedback ─────────────────────────────────────────────────
  tooltip: (
    <svg {...s}>
      <rect x="20" y="4" width="40" height="18" rx="4" />
      <polyline points="36,22 40,28 44,22" />
      <circle cx="40" cy="36" r="6" />
      <line x1="37" y1="35" x2="43" y2="35" />
      <line x1="40" y1="32" x2="40" y2="38" />
    </svg>
  ),
  'hover-card': (
    <svg {...s}>
      <rect x="8" y="10" width="64" height="28" rx="4" />
      <circle cx="22" cy="22" r="7" />
      <line x1="34" y1="20" x2="62" y2="20" />
      <line x1="34" y1="26" x2="56" y2="26" />
    </svg>
  ),
  popover: (
    <svg {...s}>
      <rect x="14" y="2" width="52" height="28" rx="4" />
      <polyline points="36,30 40,38 44,30" />
      <line x1="22" y1="10" x2="58" y2="10" />
      <line x1="22" y1="16" x2="58" y2="16" />
      <line x1="22" y1="22" x2="46" y2="22" />
    </svg>
  ),
  alert: (
    <svg {...s}>
      <rect x="8" y="10" width="64" height="28" rx="4" />
      <circle cx="22" cy="24" r="5" />
      <line x1="22" y1="21" x2="22" y2="25" />
      <line x1="22" y1="27" x2="22" y2="27" strokeWidth="2.5" />
      <line x1="32" y1="20" x2="60" y2="20" />
      <line x1="32" y1="26" x2="56" y2="26" />
    </svg>
  ),
  badge: (
    <svg {...s}>
      <rect x="26" y="18" width="28" height="12" rx="6" />
      <line x1="32" y1="24" x2="48" y2="24" />
    </svg>
  ),
  kbd: (
    <svg {...s}>
      <rect x="24" y="12" width="32" height="24" rx="6" />
      <rect x="28" y="16" width="24" height="14" rx="3" />
      <line x1="36" y1="23" x2="44" y2="23" />
    </svg>
  ),
  progress: (
    <svg {...s}>
      <rect x="8" y="20" width="64" height="8" rx="4" />
      <rect x="8" y="20" width="40" height="8" rx="4" />
    </svg>
  ),
  skeleton: (
    <svg {...s}>
      <rect x="8" y="10" width="64" height="6" rx="3" />
      <rect x="8" y="22" width="48" height="6" rx="3" />
      <rect x="8" y="34" width="56" height="6" rx="3" />
    </svg>
  ),
  spinner: (
    <svg {...s}>
      <circle cx="40" cy="24" r="14" strokeDasharray="60 26" strokeWidth="2" />
    </svg>
  ),
  sonner: (
    <svg {...s}>
      <rect x="22" y="28" width="46" height="14" rx="4" />
      <rect x="12" y="14" width="46" height="14" rx="4" />
      <line x1="18" y1="21" x2="44" y2="21" />
      <line x1="28" y1="35" x2="54" y2="35" />
    </svg>
  ),
  'alert-dialog': (
    <svg {...s}>
      <rect x="12" y="8" width="56" height="36" rx="5" />
      <line x1="20" y1="18" x2="60" y2="18" />
      <line x1="20" y1="24" x2="58" y2="24" />
      <rect x="21" y="33" width="16" height="8" rx="3" />
      <rect x="43" y="33" width="16" height="8" rx="3" />
    </svg>
  ),

  // ── Layout ───────────────────────────────────────────────────
  accordion: (
    <svg {...s}>
      <rect x="8" y="6" width="64" height="10" rx="3" />
      <polyline points="62,10 65,12 68,10" />
      <rect x="8" y="20" width="64" height="10" rx="3" />
      <polyline points="62,24 65,26 68,24" />
      <rect x="8" y="34" width="64" height="10" rx="3" />
      <polyline points="62,38 65,40 68,38" />
    </svg>
  ),
  card: (
    <svg {...s}>
      <rect x="10" y="6" width="60" height="38" rx="6" />
      <line x1="10" y1="20" x2="70" y2="20" />
      <line x1="18" y1="28" x2="52" y2="28" />
      <line x1="18" y1="34" x2="44" y2="34" />
    </svg>
  ),
  collapsible: (
    <svg {...s}>
      <rect x="8" y="8" width="64" height="12" rx="3" />
      <polyline points="62,13 65,15 68,13" />
      <line x1="16" y1="28" x2="60" y2="28" />
      <line x1="16" y1="36" x2="50" y2="36" />
    </svg>
  ),
  command: (
    <svg {...s}>
      <rect x="8" y="5" width="64" height="40" rx="6" />
      <rect x="14" y="11" width="52" height="10" rx="3" />
      <circle cx="20" cy="16" r="3" />
      <line x1="14" y1="28" x2="72" y2="28" />
      <line x1="14" y1="34" x2="54" y2="34" />
      <line x1="14" y1="40" x2="44" y2="40" />
    </svg>
  ),
  dialog: (
    <svg {...s}>
      <rect x="14" y="8" width="52" height="34" rx="5" />
      <line x1="14" y1="22" x2="66" y2="22" />
      <line x1="22" y1="28" x2="58" y2="28" />
      <line x1="22" y1="34" x2="50" y2="34" />
      <line x1="57" y1="14" x2="63" y2="20" />
      <line x1="63" y1="14" x2="57" y2="20" />
    </svg>
  ),
  drawer: (
    <svg {...s}>
      <rect x="8" y="4" width="64" height="40" rx="4" />
      <line x1="8" y1="26" x2="72" y2="26" />
      <line x1="34" y1="30" x2="46" y2="30" />
      <line x1="16" y1="36" x2="64" y2="36" />
      <line x1="20" y1="41" x2="60" y2="41" />
    </svg>
  ),
  empty: (
    <svg {...s}>
      <rect x="8" y="6" width="64" height="40" rx="6" />
      <circle cx="40" cy="22" r="8" />
      <line x1="32" y1="36" x2="48" y2="36" />
      <line x1="35" y1="41" x2="45" y2="41" />
    </svg>
  ),
  separator: (
    <svg {...s}>
      <line x1="8" y1="14" x2="72" y2="14" />
      <line x1="8" y1="24" x2="72" y2="24" />
      <line x1="8" y1="34" x2="72" y2="34" />
    </svg>
  ),
  sheet: (
    <svg {...s}>
      <rect x="8" y="4" width="64" height="42" rx="4" />
      <line x1="46" y1="4" x2="46" y2="46" />
      <line x1="52" y1="14" x2="66" y2="14" />
      <line x1="52" y1="20" x2="64" y2="20" />
      <line x1="52" y1="26" x2="60" y2="26" />
    </svg>
  ),

  // ── Text ─────────────────────────────────────────────────────
  label: (
    <svg {...s}>
      <line x1="8" y1="18" x2="34" y2="18" />
      <rect x="8" y="24" width="64" height="14" rx="3" />
    </svg>
  ),

  // ── Content ──────────────────────────────────────────────────
  avatar: (
    <svg {...s}>
      <circle cx="40" cy="24" r="16" />
      {/* Head */}
      <circle cx="40" cy="19" r="5" />
      {/* Shoulders — bezier arc at bottom of container */}
      <path d="M 27 40 Q 40 30 53 40" />
    </svg>
  ),
  calendar: (
    <svg {...s}>
      <rect x="8" y="8" width="64" height="38" rx="4" />
      <line x1="8" y1="20" x2="72" y2="20" />
      <line x1="24" y1="8" x2="24" y2="20" />
      <line x1="56" y1="8" x2="56" y2="20" />
      <rect x="14" y="26" width="8" height="6" rx="1" />
      <rect x="28" y="26" width="8" height="6" rx="1" />
      <rect x="42" y="26" width="8" height="6" rx="1" />
      <rect x="56" y="26" width="8" height="6" rx="1" />
      <rect x="14" y="36" width="8" height="6" rx="1" />
      <rect x="28" y="36" width="8" height="6" rx="1" />
    </svg>
  ),
  carousel: (
    <svg {...s}>
      <rect x="6" y="14" width="18" height="22" rx="3" opacity="0.4" />
      <rect x="28" y="8" width="24" height="32" rx="3" />
      <rect x="56" y="14" width="18" height="22" rx="3" opacity="0.4" />
      <circle cx="34" cy="44" r="2" />
      <circle cx="40" cy="44" r="2" fill="currentColor" />
      <circle cx="46" cy="44" r="2" />
    </svg>
  ),
  'context-menu': (
    <svg {...s}>
      <circle cx="22" cy="26" r="10" />
      <line x1="19" y1="23" x2="25" y2="29" />
      <line x1="25" y1="23" x2="19" y2="29" />
      <rect x="34" y="8" width="38" height="32" rx="4" />
      <line x1="40" y1="18" x2="66" y2="18" />
      <line x1="40" y1="25" x2="66" y2="25" />
      <line x1="40" y1="32" x2="58" y2="32" />
    </svg>
  ),

  // ── Navigation ───────────────────────────────────────────────
  breadcrumb: (
    <svg {...s}>
      <line x1="8" y1="24" x2="20" y2="24" />
      <polyline points="23,20 27,24 23,28" />
      <line x1="31" y1="24" x2="43" y2="24" />
      <polyline points="47,20 51,24 47,28" />
      <line x1="55" y1="24" x2="72" y2="24" />
    </svg>
  ),
  'dropdown-menu': (
    <svg {...s}>
      <rect x="16" y="6" width="48" height="12" rx="4" />
      <polyline points="55,10 58,13 61,10" />
      <rect x="16" y="22" width="48" height="24" rx="4" />
      <line x1="22" y1="29" x2="58" y2="29" />
      <line x1="22" y1="35" x2="58" y2="35" />
      <line x1="22" y1="41" x2="46" y2="41" />
    </svg>
  ),
  menubar: (
    <svg {...s}>
      <rect x="4" y="8" width="72" height="14" rx="3" />
      <line x1="26" y1="8" x2="26" y2="22" />
      <line x1="50" y1="8" x2="50" y2="22" />
      <line x1="10" y1="15" x2="22" y2="15" />
      <line x1="30" y1="15" x2="46" y2="15" />
      <line x1="54" y1="15" x2="70" y2="15" />
    </svg>
  ),
  'navigation-menu': (
    <svg {...s}>
      <line x1="8" y1="8" x2="72" y2="8" />
      <line x1="8" y1="14" x2="72" y2="14" />
      <rect x="8" y="22" width="44" height="22" rx="4" />
      <line x1="14" y1="28" x2="46" y2="28" />
      <line x1="14" y1="34" x2="40" y2="34" />
      <line x1="14" y1="40" x2="34" y2="40" />
    </svg>
  ),
  pagination: (
    <svg {...s}>
      <polyline points="12,20 8,24 12,28" />
      <rect x="16" y="18" width="10" height="12" rx="3" />
      <rect x="30" y="18" width="10" height="12" rx="3" />
      <rect x="44" y="18" width="10" height="12" rx="3" />
      <rect x="58" y="18" width="10" height="12" rx="3" />
      <polyline points="72,20 76,24 72,28" />
    </svg>
  ),
  tabs: (
    <svg {...s}>
      <rect x="8" y="6" width="18" height="12" rx="3 3 0 0" />
      <rect x="30" y="6" width="18" height="12" rx="3 3 0 0" />
      <rect x="52" y="6" width="18" height="12" rx="3 3 0 0" />
      <rect x="8" y="18" width="64" height="24" rx="0 3 3 3" />
    </svg>
  ),

  // ── Data ─────────────────────────────────────────────────────
  'data-table': (
    <svg {...s}>
      {/* Toolbar: search bar + button */}
      <rect x="8" y="2" width="34" height="8" rx="3" />
      <rect x="54" y="2" width="18" height="8" rx="3" />
      {/* Table with uniform rows (10px each) */}
      <rect x="8" y="13" width="64" height="33" rx="4" />
      <line x1="8" y1="23" x2="72" y2="23" />
      <line x1="30" y1="13" x2="30" y2="46" />
      <line x1="54" y1="13" x2="54" y2="46" />
      <line x1="8" y1="33" x2="72" y2="33" />
      <line x1="8" y1="43" x2="72" y2="43" />
    </svg>
  ),
  item: (
    <svg {...s}>
      <rect x="8" y="14" width="64" height="20" rx="4" />
      <circle cx="22" cy="24" r="5" />
      <line x1="32" y1="21" x2="58" y2="21" />
      <line x1="32" y1="27" x2="50" y2="27" />
    </svg>
  ),
  table: (
    <svg {...s}>
      <rect x="8" y="6" width="64" height="38" rx="4" />
      <line x1="8" y1="16" x2="72" y2="16" />
      <line x1="30" y1="6" x2="30" y2="44" />
      <line x1="54" y1="6" x2="54" y2="44" />
      <line x1="8" y1="26" x2="72" y2="26" />
      <line x1="8" y1="36" x2="72" y2="36" />
    </svg>
  ),

  // ── Chart ────────────────────────────────────────────────────
  'chart-bar': (
    <svg {...s}>
      <line x1="8" y1="40" x2="72" y2="40" />
      <line x1="8" y1="8" x2="8" y2="40" />
      <rect x="14" y="22" width="12" height="18" rx="2" />
      <rect x="34" y="12" width="12" height="28" rx="2" />
      <rect x="54" y="28" width="12" height="12" rx="2" />
    </svg>
  ),
  'chart-line': (
    <svg {...s}>
      <line x1="8" y1="40" x2="72" y2="40" />
      <line x1="8" y1="8" x2="8" y2="40" />
      <polyline points="14,32 28,18 42,26 56,10 70,20" />
      <circle cx="14" cy="32" r="2" fill="currentColor" />
      <circle cx="28" cy="18" r="2" fill="currentColor" />
      <circle cx="42" cy="26" r="2" fill="currentColor" />
      <circle cx="56" cy="10" r="2" fill="currentColor" />
      <circle cx="70" cy="20" r="2" fill="currentColor" />
    </svg>
  ),
  'chart-area': (
    <svg {...s}>
      <line x1="8" y1="40" x2="72" y2="40" />
      <line x1="8" y1="8" x2="8" y2="40" />
      <polyline points="14,32 28,18 42,26 56,10 70,20" />
      <polyline points="14,32 14,40 70,40 70,20" strokeDasharray="3 2" />
    </svg>
  ),
  'chart-pie': (
    <svg {...s}>
      <circle cx="40" cy="24" r="18" />
      {/* 3 unequal slices: 70° / 90° / 200° */}
      <line x1="40" y1="24" x2="40" y2="6" />
      <line x1="40" y1="24" x2="57" y2="18" />
      <line x1="40" y1="24" x2="46" y2="42" />
    </svg>
  ),
  'chart-radar': (
    <svg {...s}>
      {/* Proper proportions: vertex-up hexagon, R=18 */}
      <polygon points="40,6 56,15 56,33 40,42 24,33 24,15" />
      <polygon points="40,13 50,18 50,30 40,35 30,30 30,18" />
      {/* 3 axis lines */}
      <line x1="40" y1="6" x2="40" y2="42" />
      <line x1="24" y1="15" x2="56" y2="33" />
      <line x1="56" y1="15" x2="24" y2="33" />
    </svg>
  ),
  'chart-radial': (
    <svg {...s}>
      {/* Radial bar chart: 3 concentric arcs of different lengths */}
      {/* Tracks (faint full circles) */}
      <circle cx="40" cy="24" r="17" strokeOpacity={0.2} />
      <circle cx="40" cy="24" r="11" strokeOpacity={0.2} />
      <circle cx="40" cy="24" r="5" strokeOpacity={0.2} />
      {/* Progress arcs, starting from 12 o'clock (dashoffset = circ/4) */}
      {/* r=17, circ≈107: 75% → 80, offset≈27 */}
      <circle cx="40" cy="24" r="17" strokeDasharray="80 27" strokeDashoffset="27" strokeWidth={3} />
      {/* r=11, circ≈69: 50% → 35, offset≈17 */}
      <circle cx="40" cy="24" r="11" strokeDasharray="35 34" strokeDashoffset="17" strokeWidth={3} />
      {/* r=5, circ≈31: 80% → 25, offset≈8 */}
      <circle cx="40" cy="24" r="5" strokeDasharray="25 6" strokeDashoffset="8" strokeWidth={3} />
    </svg>
  ),
}

interface DocCardProps {
  title: string
  href: string
  description: string
  illustration: string
}

export function DocCard({ title, href, description, illustration }: DocCardProps) {
  const illu = illustrations[illustration]
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors no-underline"
    >
      <div className="flex items-center justify-center h-20 p-4 bg-neutral-50 dark:bg-neutral-900 text-neutral-300 dark:text-neutral-600">
        {illu ?? null}
      </div>
      <div className="px-3 pt-2.5 pb-3">
        <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
          {title}
        </div>
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5 leading-relaxed">
          {description}
        </div>
      </div>
    </Link>
  )
}

export function DocGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 mb-8">
      {children}
    </div>
  )
}
