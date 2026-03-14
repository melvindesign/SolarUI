import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js'
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js'
import { z } from 'zod'

import { listComponents } from '@/lib/mcp/tools/list-components'
import { getComponent } from '@/lib/mcp/tools/get-component'
import { findComponent } from '@/lib/mcp/tools/find-component'
import { getColorToken } from '@/lib/mcp/tools/get-color-token'
import { getGuidelines } from '@/lib/mcp/tools/get-guidelines'
import { buildRegistry } from '@/lib/mcp/component-registry'
import { getColorToken as colorTokenForResource } from '@/lib/mcp/tools/get-color-token'
import { getGuidelines as guidelinesForResource } from '@/lib/mcp/tools/get-guidelines'

function createMcpServer(): McpServer {
  const server = new McpServer({ name: 'solar-ui', version: '1.0.0' })

  server.tool(
    'list_components',
    'List all SolarUI components grouped by category (Action, Form, Feedback, Layout, Navigation, Data, Chart, Core).',
    {},
    async () => ({ content: [{ type: 'text' as const, text: await listComponents() }] })
  )

  server.tool(
    'get_component',
    'Get full documentation for a SolarUI component: variants, props, JSX code examples, and install command. Always call this before using a component to ensure correct variant names.',
    { name: z.string().describe('Component name in kebab-case, e.g. "button", "alert-dialog", "chart-bar"') },
    async ({ name }) => ({ content: [{ type: 'text' as const, text: await getComponent(name) }] })
  )

  server.tool(
    'find_component',
    'Find the right SolarUI component for a use case. Describe what you need in plain English.',
    { query: z.string().describe('Plain-English description, e.g. "show confirmation before delete", "display user status"') },
    ({ query }) => ({ content: [{ type: 'text' as const, text: findComponent(query) }] })
  )

  server.tool(
    'get_color_token',
    'Look up SolarUI color tokens. Returns semantic meaning of each step (1–12) and the correct Tailwind classes. Includes anti-patterns (no dark: prefixes, no shadcn default tokens).',
    {
      group: z.string().optional().describe('"default", "brand", "error", "success", "warning", or "info". Omit for all groups.'),
      step: z.number().int().min(1).max(12).optional().describe('Step 1–12 for a specific token.'),
    },
    ({ group, step }) => ({ content: [{ type: 'text' as const, text: getColorToken(group, step) }] })
  )

  server.tool(
    'get_guidelines',
    'Get SolarUI design guidelines and critical rules: color tokens, dark mode, control height, anti-patterns.',
    {
      topic: z.enum(['colors', 'typography', 'installation', 'introduction', 'philosophy', 'theming']).optional(),
    },
    ({ topic }) => ({ content: [{ type: 'text' as const, text: getGuidelines(topic) }] })
  )

  server.resource(
    'component-registry',
    'solar://components',
    { mimeType: 'application/json', description: 'Complete SolarUI component registry.' },
    async () => {
      const registry = await buildRegistry()
      return { contents: [{ uri: 'solar://components', mimeType: 'application/json', text: JSON.stringify(registry, null, 2) }] }
    }
  )

  server.resource(
    'color-system',
    'solar://colors',
    { mimeType: 'application/json', description: 'SolarUI color token system: 6 groups × 12 steps.' },
    () => ({ contents: [{ uri: 'solar://colors', mimeType: 'application/json', text: colorTokenForResource() }] })
  )

  server.resource(
    'design-guidelines',
    'solar://guidelines',
    { mimeType: 'text/markdown', description: 'SolarUI design principles and anti-patterns.' },
    () => ({ contents: [{ uri: 'solar://guidelines', mimeType: 'text/markdown', text: guidelinesForResource() }] })
  )

  server.resource(
    'component-docs',
    new ResourceTemplate('solar://components/{name}', { list: undefined }),
    { mimeType: 'text/markdown', description: 'Documentation for a specific component.' },
    async (uri, { name }) => {
      const componentName = Array.isArray(name) ? name[0] : name
      return { contents: [{ uri: uri.href, mimeType: 'text/markdown', text: await getComponent(componentName ?? '') }] }
    }
  )

  return server
}

async function handleMcpRequest(request: Request): Promise<Response> {
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // stateless
  })
  const server = createMcpServer()
  await server.connect(transport)
  return transport.handleRequest(request)
}

export async function GET(request: Request): Promise<Response> {
  return handleMcpRequest(request)
}

export async function POST(request: Request): Promise<Response> {
  return handleMcpRequest(request)
}

export async function DELETE(request: Request): Promise<Response> {
  return handleMcpRequest(request)
}
