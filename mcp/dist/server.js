import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { listComponents } from './tools/list-components.js';
import { getComponent } from './tools/get-component.js';
import { findComponent } from './tools/find-component.js';
import { getColorToken } from './tools/get-color-token.js';
import { getGuidelines } from './tools/get-guidelines.js';
import { getComponentRegistryResource } from './resources/component-registry.js';
import { getColorSystemResource } from './resources/color-system.js';
import { getDesignGuidelinesResource } from './resources/design-guidelines.js';
import { getComponentDocsResource } from './resources/component-docs.js';
export function createServer() {
    const server = new McpServer({
        name: 'solar-ui',
        version: '1.0.0',
    });
    // ─── Tools ───────────────────────────────────────────────────────────────
    server.tool('list_components', 'List all SolarUI components grouped by category (Action, Form, Feedback, Layout, Navigation, Data, Chart, Core). Use this to discover what components are available.', {}, async () => {
        const text = await listComponents();
        return { content: [{ type: 'text', text }] };
    });
    server.tool('get_component', 'Get full documentation for a SolarUI component: variants, props, JSX code examples, and install command. Always call this before using a component to ensure correct variant names.', { name: z.string().describe('Component name in kebab-case, e.g. "button", "alert-dialog", "chart-bar"') }, async ({ name }) => {
        const text = await getComponent(name);
        return { content: [{ type: 'text', text }] };
    });
    server.tool('find_component', 'Find the right SolarUI component for a given use case. Describe what you need in plain English and get back a ranked list of matching components.', { query: z.string().describe('Plain-English description, e.g. "show confirmation before delete", "display user status inline", "navigate between sections"') }, ({ query }) => {
        const text = findComponent(query);
        return { content: [{ type: 'text', text }] };
    });
    server.tool('get_color_token', 'Look up SolarUI color tokens. Returns the semantic meaning of each step (1–12) and which Tailwind classes to use. Also includes critical anti-patterns (no dark: prefixes, no shadcn default tokens).', {
        group: z.string().optional().describe('Semantic group: "default", "brand", "error", "success", "warning", or "info". Omit to get an overview of all groups.'),
        step: z.number().int().min(1).max(12).optional().describe('Step number 1–12. Provide together with group for focused guidance on a specific token.'),
    }, ({ group, step }) => {
        const text = getColorToken(group, step);
        return { content: [{ type: 'text', text }] };
    });
    server.tool('get_guidelines', 'Get SolarUI design guidelines and critical rules. Includes color token usage, dark mode approach, control height system, and common anti-patterns AI agents must avoid.', {
        topic: z.enum(['colors', 'typography', 'installation', 'introduction', 'philosophy', 'theming']).optional().describe('Specific topic to retrieve. Omit for all guidelines.'),
    }, ({ topic }) => {
        const text = getGuidelines(topic);
        return { content: [{ type: 'text', text }] };
    });
    // ─── Resources ───────────────────────────────────────────────────────────
    server.resource('component-registry', 'solar://components', { mimeType: 'application/json', description: 'Complete SolarUI component registry with categories, variants, and descriptions. Load this at the start of a UI-building session.' }, async () => {
        const text = await getComponentRegistryResource();
        return { contents: [{ uri: 'solar://components', mimeType: 'application/json', text }] };
    });
    server.resource('color-system', 'solar://colors', { mimeType: 'application/json', description: 'Complete SolarUI color token system: 6 semantic groups × 12 steps = 72 Tailwind utilities with semantic roles and anti-patterns.' }, () => {
        const text = getColorSystemResource();
        return { contents: [{ uri: 'solar://colors', mimeType: 'application/json', text }] };
    });
    server.resource('design-guidelines', 'solar://guidelines', { mimeType: 'text/markdown', description: 'SolarUI design principles, token usage rules, and critical anti-patterns (dark mode, shadcn token names, etc.).' }, () => {
        const text = getDesignGuidelinesResource();
        return { contents: [{ uri: 'solar://guidelines', mimeType: 'text/markdown', text }] };
    });
    server.resource('component-docs', new ResourceTemplate('solar://components/{name}', { list: undefined }), { mimeType: 'text/markdown', description: 'Full documentation for a specific SolarUI component. URI format: solar://components/button' }, async (uri, { name }) => {
        const componentName = Array.isArray(name) ? name[0] : name;
        const text = await getComponentDocsResource(componentName ?? '');
        return { contents: [{ uri: uri.href, mimeType: 'text/markdown', text }] };
    });
    return server;
}
