import { buildRegistry } from '../lib/component-registry.js';
export async function getComponentRegistryResource() {
    const registry = await buildRegistry();
    return JSON.stringify(registry, null, 2);
}
