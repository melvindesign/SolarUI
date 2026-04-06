import Image from 'next/image'
import Link from 'next/link'

const logos = [
  { id: 'nextjs', label: 'NEXT.js', src: '/logos/nextjs.svg', width: 75, height: 15, href: 'https://nextjs.org/' },
  { id: 'shadcn', label: 'shadcn/ui', src: '/logos/shadcnui.svg', width: 109, height: 28, href: 'https://ui.shadcn.com/' },
  { id: 'tailwind', label: 'tailwindcss', src: '/logos/tailwindcss.svg', width: 127, height: 16, href: 'https://tailwindcss.com/' },
  { id: 'radix', label: 'Radix', src: '/logos/radix.svg', width: 63, height: 20, href: 'https://www.radix-ui.com/' },
]

export default function TechLogosSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {logos.map(({ id, label, src, width, height, href }) => (
            <Link key={id} href={href} target="_blank" rel="noopener noreferrer" className="opacity-60 transition-opacity hover:opacity-100">
              <Image
                src={src}
                alt={label}
                width={width}
                height={height}
                className="invert dark:invert-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
