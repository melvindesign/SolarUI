# ☀️ Solar UI

**Solar UI** is an open-source React component library built on top of [shadcn/ui](https://ui.shadcn.com). It ships 68 components designed to look great together — with a coherent visual system, the Radix UI color scale, and zero lock-in.

→ **[Documentation](https://solar-ui.dev/docs)** · [GitHub](https://github.com/melvindesign/SolarUI)

---

## Why Solar UI

- **Open code** — Components live in your project. Copy them, modify them, own them. No package to maintain, no dependency to upgrade.
- **Aligned by design** — Every component was designed to work visually with every other. Buttons, inputs, selects — aligned to the pixel.
- **Radix UI colors** — A structured 12-step color scale. Accessible contrast guaranteed, dark mode built in.
- **Tailwind v4** — CSS-first utility classes with design tokens. No config file, no plugin chain.

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI primitives |
| Colors | Radix UI color system |
| Docs | Nextra 4 |
| Search | Pagefind |
| Charts | Recharts |

---

## Running locally

Clone the repo and start the dev server. This runs the documentation site and exposes the component registry and MCP server.

```bash
git clone https://github.com/melvindesign/SolarUI.git
cd SolarUI
npm install
npm run dev
```

The site is available at `http://localhost:3000`.

> **Note:** The `postbuild` script runs Pagefind to index the docs for search. Run `npm run build` once to generate the search index if you need it locally.

---

## Installing Solar UI in your project

Solar UI components are distributed via a shadcn-compatible registry. The registry is served by the Solar UI app itself — either running locally or from the deployed site.

### 1. Create a Next.js project

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
cd my-app
```

### 2. Initialize shadcn

```bash
npx shadcn@latest init --defaults
```

This generates `components.json` and installs the base files (`button.tsx`, `utils.ts`, etc.).

### 3. Add the Solar UI theme

```bash
npx shadcn@latest add https://solar-ui.dev/r/solar-theme.json
```

This creates `src/app/solar-theme.css`. Import it at the top of your `globals.css`, before `@import "tailwindcss"`:

```css
/* src/app/globals.css */
@import "./solar-theme.css";
@import "tailwindcss";
```

### 4. Configure the Solar UI registry

Add the registry entry to `components.json` so shadcn resolves Solar UI components correctly:

```json
{
  "registries": {
    "solar": {
      "url": "https://solar-ui.dev/r"
    }
  }
}
```

### 5. Add components

```bash
npx shadcn@latest add https://solar-ui.dev/r/button.json
```

Replace `button.json` with any component from the [docs](https://solar-ui.dev/docs). Components are installed in `src/components/ui/`.

### 6. Use a component

```tsx
import { Button } from '@/components/ui/button'

export default function Page() {
  return <Button variant="primary">Get started</Button>
}
```

---

## MCP — AI assistant integration

Solar UI ships a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that exposes components, color tokens, and design system rules to AI assistants. This lets Claude, Cursor, or VS Code Copilot generate correct Solar UI code on the first try — right variants, right tokens, no dark mode anti-patterns.

> The MCP server is served by the Solar UI app at `/api/mcp`. It must be running (locally or deployed) for the AI to connect.

### Configuration

Create a config file in the root of **your project** (not in Solar UI):

**Claude Code** — `.mcp.json`
```json
{
  "mcpServers": {
    "solar-ui": {
      "type": "http",
      "url": "https://solar-ui.dev/api/mcp"
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
      "url": "https://solar-ui.dev/api/mcp"
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
      "url": "https://solar-ui.dev/api/mcp"
    }
  }
}
```

Replace the URL with `http://localhost:3000/api/mcp` if you're running Solar UI locally.

### Verify the connection

Open a new AI session and send:

```
List the available Solar UI components
```

The AI should respond with the full component list grouped by category (Action, Form, Feedback, Layout…).

### Available tools

| Tool | Description |
|---|---|
| `list_components` | All components grouped by category |
| `get_component` | Full docs for a component: variants, props, JSX examples, install command |
| `find_component` | Find the right component from a natural language description |
| `get_color_token` | Semantics of the 72 color tokens (6 groups × 12 steps) |
| `get_guidelines` | Design rules, anti-patterns, and best practices |

---

## Contributing

Contributions are welcome. Open an issue or a pull request on [GitHub](https://github.com/melvindesign/SolarUI).

```bash
git clone https://github.com/melvindesign/SolarUI.git
cd SolarUI
npm install
npm run dev
```

---

## License

MIT — © 2026 Solar UI
