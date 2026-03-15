import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-32">
      {/* Warm radial background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 700px 400px at 50% 50%, var(--orange-3), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-[var(--gray-12)] sm:text-5xl">
          Start building something beautiful.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-balance text-lg text-[var(--gray-11)]">
          Copy a component. Own it completely. No package to install, no version
          to maintain.
        </p>
        <div className="mt-8">
          <Button
            asChild
            className="shadow-[0_0_40px_8px_var(--orange-9)] transition-shadow duration-500 hover:shadow-[0_0_56px_16px_var(--orange-9)]"
          >
            <Link href="/docs">Browse the docs →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
