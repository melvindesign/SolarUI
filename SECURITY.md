# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 0.1.x   | Yes       |

## Reporting a Vulnerability

If you discover a security vulnerability in Solar UI, please **do not** open a public GitHub issue.

Instead, report it by:

1. Opening a [GitHub Security Advisory](https://github.com/melvindesign/SolarUI/security/advisories/new) (preferred)
2. Or emailing the maintainer directly (see profile for contact info)

Please include:
- A description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Any suggested fix (optional)

You will receive a response within 48 hours. We will work with you to understand and resolve the issue before any public disclosure.

## Scope

Solar UI is a component library — components run in the user's own project. The primary security concerns are:

- **XSS vulnerabilities** in component props or rendering
- **Dependency vulnerabilities** in npm packages
- **Security issues** in the MCP server (`/api/mcp`)
- **Documentation site** vulnerabilities (solar-ui.dev)

## Out of Scope

- Issues in third-party libraries (Radix UI, shadcn/ui, Tailwind) — please report those upstream
- Theoretical vulnerabilities without proof of concept
