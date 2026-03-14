import { buildRegistry } from '@/lib/mcp/component-registry'

export async function listComponents(): Promise<string> {
  const registry = await buildRegistry()

  const result = {
    categories: registry.categories.map(cat => ({
      name: cat.name,
      components: cat.components.map(name => {
        const info = registry.components[name]
        return {
          name,
          label: info?.label ?? name,
          description: info?.description ?? '',
          hasVariants: Object.keys(info?.variants ?? {}).length > 0,
        }
      }),
    })),
    total: Object.keys(registry.components).length,
  }

  return JSON.stringify(result, null, 2)
}
