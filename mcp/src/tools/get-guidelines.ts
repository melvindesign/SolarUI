import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { PATHS } from '../lib/paths.js'
import { parseMdx } from '../lib/parse-mdx.js'

const HARDCODED_RULES = `
## Critical Rules for AI Agents

### 1. No dark: prefixes
Never add \`dark:\` utility classes. The color system uses Radix UI CSS variables that automatically adapt to dark mode. Adding \`dark:\` overrides will break the design system.

❌ \`className="bg-white dark:bg-gray-900"\`
✅ \`className="bg-default-1"\`

### 2. Use SolarUI tokens, not shadcn defaults
SolarUI does NOT use shadcn's default token names. These do not exist in SolarUI:
- \`text-foreground\` → use \`text-default-12\`
- \`text-muted-foreground\` → use \`text-default-11\`
- \`bg-background\` → use \`bg-default-1\`
- \`bg-card\` → use \`bg-default-2\`
- \`text-primary\` → use \`text-brand-11\` or \`text-brand-12\`
- \`bg-primary\` → use \`bg-brand-9\`
- \`text-destructive\` → use \`text-error-11\`

### 3. Control height consistency
All buttons and form inputs must use the shared control height (\`--height-control: 2.25rem\`). In Tailwind, this maps to \`h-9\`. Never set custom heights on buttons or inputs — use the existing component which already has the correct height built in.

### 4. Semantic color tokens only
Never use arbitrary hex values or raw Tailwind color utilities (e.g. \`bg-blue-500\`, \`text-red-600\`). Always use the semantic group + step pattern: \`bg-brand-9\`, \`text-error-11\`, \`border-default-7\`.

The 6 semantic groups are: **default** (gray), **brand** (blue), **error** (red), **success** (green), **warning** (amber), **info** (sky).

### 5. Components are copy-paste, not npm packages
Components are installed via the registry, not via npm install. Use:
\`\`\`bash
npx shadcn@latest add https://solar-ui.vercel.app/r/<component-name>.json
\`\`\`

### 6. No hardcoded color values
Do not hardcode colors like \`border-blue-500\` even for one-off cases. Pick the closest semantic group and step. This ensures automatic dark mode support.
`

const TOPIC_FILES: Record<string, { dir: string; file: string }[]> = {
  colors: [
    { dir: PATHS.contentFoundation, file: 'colors.mdx' },
    { dir: PATHS.contentTheming, file: 'composing-palettes.mdx' },
  ],
  typography: [
    { dir: PATHS.contentFoundation, file: 'typography.mdx' },
  ],
  installation: [
    { dir: PATHS.contentOverview, file: 'installation.mdx' },
  ],
  introduction: [
    { dir: PATHS.contentOverview, file: 'introduction.mdx' },
  ],
  philosophy: [
    { dir: PATHS.contentOverview, file: 'introduction.mdx' },
  ],
  theming: [
    { dir: PATHS.contentTheming, file: 'composing-palettes.mdx' },
  ],
}

function readMdxFile(dir: string, file: string): string {
  const filePath = join(dir, file)
  if (!existsSync(filePath)) return ''
  const raw = readFileSync(filePath, 'utf-8')
  const parsed = parseMdx(raw)
  const parts: string[] = []
  if (parsed.prose) parts.push(parsed.prose)
  if (parsed.codeBlocks.length > 0) parts.push(parsed.codeBlocks.join('\n\n'))
  return parts.join('\n\n')
}

export function getGuidelines(topic?: string): string {
  if (topic && TOPIC_FILES[topic]) {
    const files = TOPIC_FILES[topic]
    const content = files
      .map(f => readMdxFile(f.dir, f.file))
      .filter(Boolean)
      .join('\n\n---\n\n')
    return content + '\n\n' + HARDCODED_RULES
  }

  // Return all guidelines
  const allTopics = ['introduction', 'colors', 'theming', 'typography', 'installation']
  const allContent = allTopics
    .flatMap(t => TOPIC_FILES[t] ?? [])
    .map(f => readMdxFile(f.dir, f.file))
    .filter(Boolean)
    .join('\n\n---\n\n')

  return allContent + '\n\n' + HARDCODED_RULES
}
