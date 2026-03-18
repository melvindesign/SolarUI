import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Github } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: '68 Components' },
  { label: 'MIT License' },
  { label: 'Zero runtime' },
]

export default function OpenSourceSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <Card className="mx-auto max-w-2xl border-[var(--orange-6)] bg-[var(--gray-2)] shadow-[inset_0_0_40px_-10px_var(--orange-4)]">
        <CardContent className="flex flex-col items-center gap-6 py-12 text-center">
          {/* GitHub icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--orange-6)] bg-[var(--orange-3)]">
            <Github size={22} className="text-[var(--orange-11)]" />
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--gray-12)] sm:text-3xl">
              100% open source. 100% free.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-balance text-[var(--gray-11)]">
              Browse the code, open issues, send a PR. Solar UI is built in the
              open — every component, every decision, fully transparent.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                {i > 0 && (
                  <Separator
                    orientation="vertical"
                    className="h-4 bg-[var(--gray-6)]"
                  />
                )}
                <span className="text-sm font-medium text-[var(--gray-11)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="secondary" asChild>
            <Link
              href="https://github.com/melvindesign/SolarUI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              Contribute on GitHub
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
