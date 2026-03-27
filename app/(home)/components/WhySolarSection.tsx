import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Stack, Palette, Lightning } from '@phosphor-icons/react/dist/ssr'

const features = [
  {
    icon: Palette,
    title: 'Radix Colors',
    body: 'A 12-step color scale for every palette. Accessible contrast guaranteed, dark mode built in — without a single CSS override.',
  },
  {
    icon: Code,
    title: 'Open Code',
    body: 'No black boxes. Copy the source, make it yours. Zero lock-in, zero runtime dependency — the code lives in your project.',
  },
  {
    icon: Stack,
    title: 'Built with Radix UI',
    body: 'Accessible primitives at the base. Keyboard navigation and ARIA handling you never have to think about again.',
  },
  {
    icon: Lightning,
    title: 'Tailwind v4',
    body: 'CSS-first utility classes with design tokens baked in. No config file, no plugin chain — just write and ship.',
  },
]

export default function WhySolarSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      {/* Section header */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--orange-11)]">
          Why Solar UI
        </p>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--gray-12)] sm:text-4xl">
          Built different. On purpose.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-balance text-[var(--gray-11)]">
          Solar UI isn&apos;t a reskin of shadcn/ui. Every decision — from the
          color system to the spacing scale — was made to produce interfaces that
          look and feel cohesive.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => (
          <Card
            key={title}
            className="border-[var(--gray-6)] bg-[var(--gray-2)] transition-colors duration-200 hover:border-[var(--gray-7)] hover:bg-[var(--gray-3)]"
          >
            <CardHeader>
              <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--orange-6)] bg-[var(--orange-3)] text-[var(--orange-11)]">
                <Icon size={16} />
              </div>
              <CardTitle className="text-[var(--gray-12)]">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-[var(--gray-11)]">{body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
