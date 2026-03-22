import { Button } from '@/components/ui/button'
import { Figma } from 'lucide-react'
import Link from 'next/link'

// TODO: Replace with the real Figma Community file URL once available
const FIGMA_URL = 'https://www.figma.com/community/file/FIGMA_FILE_ID'

export default function FigmaSection() {
  return (
    <section className="border-y border-[var(--gray-6)] bg-[var(--gray-2)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Text */}
        <div className="max-w-lg">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--orange-6)] bg-[var(--orange-3)] px-3 py-1 text-xs font-medium text-[var(--orange-11)]">
            <Figma size={12} />
            Now available on Figma Community
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--gray-12)] sm:text-3xl">
            Design with SolarUI in Figma
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--gray-11)]">
            The SolarUI Figma file is now publicly available on Figma Community. Every component, color token, and typography style — ready to use in your design workflow.
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <Button asChild>
            <Link
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figma size={16} />
              Open in Figma
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
