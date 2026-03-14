import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { PATHS } from '@/lib/mcp/paths'
import { parseMdx } from '@/lib/mcp/parse-mdx'
import { buildRegistry } from '@/lib/mcp/component-registry'

export async function getComponent(name: string): Promise<string> {
  const registry = await buildRegistry()
  const info = registry.components[name]

  if (!info) {
    const allNames = Object.keys(registry.components).join(', ')
    return `Component "${name}" not found. Available components: ${allNames}`
  }

  // Try to find the MDX doc
  const mdxPaths = [
    join(PATHS.contentComponents, `${name}.mdx`),
    join(PATHS.contentCore, `${name}.mdx`),
  ]
  const mdxPath = mdxPaths.find(p => existsSync(p))

  let prose = ''
  let codeBlocks: string[] = []
  let apiTables: string[] = []

  if (mdxPath) {
    const raw = readFileSync(mdxPath, 'utf-8')
    const parsed = parseMdx(raw)
    prose = parsed.prose
    codeBlocks = parsed.codeBlocks
    apiTables = parsed.apiTables
  }

  // Installation command
  const registryBase = 'https://solar-ui.vercel.app/r'
  const installCommand = `npx shadcn@latest add ${registryBase}/${name}.json`

  const sections: string[] = []

  sections.push(`# ${info.label}`)
  if (info.description) sections.push(`\n${info.description}`)

  sections.push(`\n## Installation\n\`\`\`bash\n${installCommand}\n\`\`\``)

  if (Object.keys(info.variants).length > 0) {
    sections.push('\n## Variants')
    for (const [key, values] of Object.entries(info.variants)) {
      const defaultVal = info.defaultVariants[key]
      const valuesStr = values.map(v => (v === defaultVal ? `"${v}" (default)` : `"${v}"`)).join(', ')
      sections.push(`- **${key}**: ${valuesStr}`)
    }
  }

  if (codeBlocks.length > 0) {
    sections.push('\n## Usage Examples')
    // Include first 4 code blocks to keep output focused
    codeBlocks.slice(0, 4).forEach(block => {
      sections.push('\n' + block)
    })
  }

  if (apiTables.length > 0) {
    sections.push('\n## Props')
    apiTables.forEach(table => {
      sections.push('\n' + table)
    })
  }

  if (prose) {
    sections.push('\n## Documentation\n' + prose)
  }

  return sections.join('\n')
}
