import { fileURLToPath } from 'url'
import { join, resolve } from 'path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
// mcp/src/lib/ → resolve 4 levels up to project root
const PROJECT_ROOT = resolve(__dirname, '../../../../')

export const PATHS = {
  projectRoot: PROJECT_ROOT,
  contentComponents: join(PROJECT_ROOT, 'content/components'),
  contentCore: join(PROJECT_ROOT, 'content/core'),
  contentFoundation: join(PROJECT_ROOT, 'content/foundation'),
  contentOverview: join(PROJECT_ROOT, 'content/overview'),
  contentTheming: join(PROJECT_ROOT, 'content/theming'),
  componentsUi: join(PROJECT_ROOT, 'components/ui'),
  globalsCss: join(PROJECT_ROOT, 'app/globals.css'),
  solarThemeCss: join(PROJECT_ROOT, 'registry/solar-ui.css'),
  registryJson: join(PROJECT_ROOT, 'registry.json'),
  componentsMeta: join(PROJECT_ROOT, 'content/components/_meta.js'),
  coreMeta: join(PROJECT_ROOT, 'content/core/_meta.js'),
}
