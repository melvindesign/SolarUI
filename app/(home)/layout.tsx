import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Solar UI — Components built to look great together',
  description:
    'An open-source React component library powered by Radix Colors. Visually coherent, open code, zero lock-in.',
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: apply saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('solar-ui')||'dark';document.documentElement.classList.toggle('dark',t==='dark');}())`,
          }}
        />
      </head>
      <body className="bg-[var(--gray-1)] text-[var(--gray-12)] antialiased">
        {children}
      </body>
    </html>
  )
}
