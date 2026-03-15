# MCP — AI assistant integration

Solar UI ships a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that exposes components, color tokens, and design system rules to AI assistants. This lets Claude, Cursor, or VS Code Copilot generate correct Solar UI code on the first try — right variants, right tokens, no dark mode anti-patterns.

> The MCP server is served by the Solar UI app at `/api/mcp`. It must be running (locally or deployed) for the AI to connect.

---

## Why it's useful

Without the MCP server, an AI generating Solar UI code is likely to:

- Use non-existent variants — `variant="danger"` instead of `"destructive"`
- Use default shadcn tokens — `text-muted-foreground`, `bg-background` — which don't exist in Solar UI
- Add `dark:` classes when dark mode is handled automatically
- Pick the wrong component for a given use case

With the MCP, the AI queries the documentation directly for exact variants, correct tokens, and design rules.

---

## Setup

### 1. Start Solar UI

The MCP server is available as soon as the app is running.

```bash
# Local dev
npm run dev
# → MCP available at http://localhost:3000/api/mcp
```

Or use the deployed instance — no local server needed:
```
https://solar-ui.com/api/mcp
```

### 2. Configure your AI assistant

Create a config file in the root of **your project** (not in the Solar UI repo).

**Claude Code** — `.mcp.json`
```json
{
  "mcpServers": {
    "solar-ui": {
      "type": "http",
      "url": "https://solar-ui.com/api/mcp"
    }
  }
}
```

**Cursor** — `.cursor/mcp.json`
```json
{
  "mcpServers": {
    "solar-ui": {
      "type": "http",
      "url": "https://solar-ui.com/api/mcp"
    }
  }
}
```

**VS Code** — `.vscode/mcp.json`
```json
{
  "servers": {
    "solar-ui": {
      "type": "http",
      "url": "https://solar-ui.com/api/mcp"
    }
  }
}
```

### 3. Verify the connection

Open a new AI session and send:

```
List the available Solar UI components
```

The AI should respond with the full component list grouped by category (Action, Form, Feedback, Layout…). If not, check that the URL is correct and the server is reachable.

---

## Usage

Once configured, the AI can answer questions about components, colors, and design rules in natural language.

**Find the right component:**
```
Which Solar UI component should I use to confirm before deleting an item?
```
→ The AI queries `find_component` and recommends `alert-dialog`.

**Get exact variants:**
```
What variants are available for the Button component?
```
→ The AI queries `get_component` and lists: `default`, `primary`, `outline`, `secondary`, `ghost`, `destructive`, `link`.

**Generate correct code:**
```
Create a login form with Solar UI. Use the correct color tokens and variants.
```
→ The AI consults `get_guidelines` and `get_component` to generate design-system-compliant code.

**Understand the color system:**
```
Which token should I use for secondary text in Solar UI?
```
→ The AI queries `get_color_token` and responds `text-default-11`.

For best results, explicitly tell the AI to use Solar UI:
```
I'm working with Solar UI. Check the MCP before generating code to make sure
you're using the right components and tokens.
```

---

## Reference

### Tools

| Tool | Parameters | Description |
|---|---|---|
| `list_components` | — | All components grouped by category |
| `get_component` | `name` | Full docs: variants, props, JSX examples, install command |
| `find_component` | `query` | Find the right component from a natural language description |
| `get_color_token` | `group?`, `step?` | Semantics of the 72 color tokens (6 groups × 12 steps) |
| `get_guidelines` | `topic?` | Design rules, anti-patterns, and best practices |

### Resources

| URI | Format | Content |
|---|---|---|
| `solar://components` | JSON | Full component registry |
| `solar://colors` | JSON | Complete color token system |
| `solar://guidelines` | Markdown | Design rules and anti-patterns |
| `solar://components/{name}` | Markdown | Docs for a specific component |
