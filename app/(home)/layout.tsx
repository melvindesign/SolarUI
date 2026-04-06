import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Solar UI — Components built to look great together',
  description:
    'An open-source React component library powered by Radix Colors. Visually coherent, open code, zero lock-in.',
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Anti-FOUC: apply saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('solar-ui')||'system';if(t==='dark'){document.documentElement.classList.add('dark')}else if(t==='light'){document.documentElement.classList.remove('dark')}else{if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}}())`,
          }}
        />
      </head>
      <body className="bg-default-1 text-default-12 antialiased">
        {children}
      </body>
    </html>
  )
}
