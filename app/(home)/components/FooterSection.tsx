import { Separator } from '@/components/ui/separator'
import { Github } from 'lucide-react'
import Link from 'next/link'

// TODO: Replace with the real Figma Community file URL once available
const FIGMA_URL = 'https://www.figma.com/community/file/FIGMA_FILE_ID'

const links = [
  {
    label: 'Product',
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Components', href: '/docs/components/button' },
      { label: 'Foundation', href: '/docs/foundation/colors' },
      { label: 'Changelog', href: '/docs/overview/changelog' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Installation', href: '/docs/overview/installation' },
      { label: 'Theming', href: '/docs/theming/composing-palettes' },
      {
        label: 'Figma',
        href: FIGMA_URL,
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/melvindesign/SolarUI',
        external: true,
      },
    ],
  },
]

export default function FooterSection() {
  return (
    <footer className="border-t border-[var(--gray-6)] bg-[var(--gray-1)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold text-[var(--gray-12)]"
            >
              <span>☀️</span>
              Solar UI
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-[var(--gray-11)]">
              An open-source React component library powered by Radix Colors.
              Visually coherent, open code, zero lock-in.
            </p>
            <Link
              href="https://github.com/melvindesign/SolarUI"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
            >
              <Github size={14} />
              GitHub
            </Link>
          </div>

          {/* Links columns */}
          <div className="flex gap-12">
            {links.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[var(--gray-9)]">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-[var(--gray-6)]" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-[var(--gray-10)] sm:flex-row">
          <span>© 2026 Solar UI. MIT License.</span>
          <span>Built with Solar UI</span>
        </div>
      </div>
    </footer>
  )
}
