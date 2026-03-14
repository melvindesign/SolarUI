import { getComponent } from '../tools/get-component.js'

export async function getComponentDocsResource(name: string): Promise<string> {
  return getComponent(name)
}
