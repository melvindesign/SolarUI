import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { PATHS } from './paths.js'

export interface ComponentInfo {
  name: string
  label: string
  category: string
  description: string
  variants: Record<string, string[]>
  defaultVariants: Record<string, string>
  hasSource: boolean
}

export interface ComponentRegistry {
  categories: { name: string; components: string[] }[]
  components: Record<string, ComponentInfo>
}

let cached: ComponentRegistry | null = null

function extractVariantsFromSource(source: string): {
  variants: Record<string, string[]>
  defaultVariants: Record<string, string>
} {
  const variants: Record<string, string[]> = {}
  const defaultVariants: Record<string, string> = {}

  const cvaMatch = source.match(/cva\s*\(\s*["'`][^"'`]*["'`]\s*,\s*\{([\s\S]+?)\}\s*\)/)
  if (!cvaMatch) return { variants, defaultVariants }

  const cvaBody = cvaMatch[1] ?? ''

  const variantsMatch = cvaBody.match(/variants\s*:\s*\{([\s\S]+?)\}\s*,?\s*defaultVariants/)
  if (variantsMatch) {
    const variantsBlock = variantsMatch[1] ?? ''
    const variantKeyRegex = /(\w+)\s*:\s*\{([^}]+)\}/g
    let m: RegExpExecArray | null
    while ((m = variantKeyRegex.exec(variantsBlock)) !== null) {
      const key = m[1]
      const valuesBlock = m[2] ?? ''
      if (!key) continue
      const valueRegex = /["']?(\w[\w-]*)["']?\s*:/g
      const values: string[] = []
      let vm: RegExpExecArray | null
      while ((vm = valueRegex.exec(valuesBlock)) !== null) {
        if (vm[1]) values.push(vm[1])
      }
      if (values.length > 0) variants[key] = values
    }
  }

  const defaultMatch = cvaBody.match(/defaultVariants\s*:\s*\{([^}]+)\}/)
  if (defaultMatch) {
    const defaultBlock = defaultMatch[1] ?? ''
    const defaultRegex = /(\w+)\s*:\s*["'](\w[\w-]*)["']/g
    let dm: RegExpExecArray | null
    while ((dm = defaultRegex.exec(defaultBlock)) !== null) {
      if (dm[1] && dm[2]) defaultVariants[dm[1]] = dm[2]
    }
  }

  return { variants, defaultVariants }
}

function extractFrontmatterDescription(mdxPath: string): string {
  if (!existsSync(mdxPath)) return ''
  const content = readFileSync(mdxPath, 'utf-8')
  const match = content.match(/^---[\s\S]*?description:\s*(.+)/m)
  if (match?.[1]) return match[1].trim().replace(/^['"]|['"]$/g, '')
  return ''
}

export async function buildRegistry(): Promise<ComponentRegistry> {
  if (cached) return cached

  const categories: { name: string; components: string[] }[] = []
  const components: Record<string, ComponentInfo> = {}

  const metaUrl = new URL(`file://${PATHS.componentsMeta}`)
  const meta = (await import(metaUrl.href)) as {
    default: Record<string, string | { type: string; title: string }>
  }

  let currentCategory = 'Other'
  let currentComponents: string[] = []

  for (const [key, value] of Object.entries(meta.default)) {
    if (typeof value === 'object' && value.type === 'separator') {
      if (currentComponents.length > 0) {
        categories.push({ name: currentCategory, components: currentComponents })
      }
      currentCategory = value.title
      currentComponents = []
    } else {
      const label = typeof value === 'string' ? value : key
      currentComponents.push(key)

      const tsxPath = join(PATHS.componentsUi, `${key}.tsx`)
      const mdxPath = join(PATHS.contentComponents, `${key}.mdx`)

      let variantData = {
        variants: {} as Record<string, string[]>,
        defaultVariants: {} as Record<string, string>,
      }
      if (existsSync(tsxPath)) {
        const source = readFileSync(tsxPath, 'utf-8')
        variantData = extractVariantsFromSource(source)
      }

      components[key] = {
        name: key,
        label,
        category: currentCategory,
        description: extractFrontmatterDescription(mdxPath),
        variants: variantData.variants,
        defaultVariants: variantData.defaultVariants,
        hasSource: existsSync(tsxPath),
      }
    }
  }

  if (currentComponents.length > 0) {
    categories.push({ name: currentCategory, components: currentComponents })
  }

  // Core components
  const coreMetaUrl = new URL(`file://${PATHS.coreMeta}`)
  const coreMeta = (await import(coreMetaUrl.href)) as { default: Record<string, string> }
  const coreComponents = Object.keys(coreMeta.default)

  if (coreComponents.length > 0) {
    categories.unshift({ name: 'Core', components: coreComponents })
    for (const [key, label] of Object.entries(coreMeta.default)) {
      const mdxPath = join(PATHS.contentCore, `${key}.mdx`)
      components[key] = {
        name: key,
        label,
        category: 'Core',
        description: extractFrontmatterDescription(mdxPath),
        variants: {},
        defaultVariants: {},
        hasSource: false,
      }
    }
  }

  cached = { categories, components }
  return cached
}
