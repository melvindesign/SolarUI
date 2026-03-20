import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'
import InstallCommand from './InstallCommand'

const anim = (delay: number) => ({
  animation: `hero-fade-in 0.6s ease-out both`,
  animationDelay: `${delay}ms`,
})

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80dvh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-24 text-center">
      {/* Warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse 800px 400px at 50% 0%, var(--orange-6), transparent)',
          opacity: 0.15,
        }}
      />

      {/* Badge */}
      <div style={anim(0)}>
        <Badge
          variant="outline"
          className="mb-6 border-[var(--orange-6)] bg-[var(--orange-3)] text-[var(--orange-11)]"
        >
          <span className="mr-1">☀️</span>
          Open Source · 68 Components
        </Badge>
      </div>

      {/* Headline */}
      <div style={anim(80)}>
        <h1 className="mx-auto max-w-3xl text-balance text-5xl font-bold tracking-tight text-[var(--gray-12)] sm:text-6xl lg:text-7xl">
          Components built to look great{' '}
          <span className="text-[var(--orange-11)]">together.</span>
        </h1>
      </div>

      {/* Sub-headline */}
      <div style={anim(160)}>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-[var(--gray-11)]">
          A React component library powered by Radix Colors. Every component is
          visually aligned, open code — copy it, adapt it, ship it. No lock-in.
        </p>
      </div>

      {/* CTAs */}
      <div style={anim(240)}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            className="shadow-[0_0_24px_4px_var(--orange-9)] transition-shadow duration-300 hover:shadow-[0_0_36px_8px_var(--orange-9)]"
          >
            <Link href="/docs">Browse Components</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link
              href="https://github.com/melvindesign/SolarUI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </Link>
          </Button>
        </div>
      </div>

      {/* Install command */}
      <div style={anim(320)} className="mt-6 w-full max-w-lg">
        <InstallCommand />
      </div>

    </section>
  )
}
