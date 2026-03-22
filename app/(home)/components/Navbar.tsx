'use client'

import { Button } from '@/components/ui/button'
import { Figma, Github, Menu, Moon, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// TODO: Replace with the real Figma Community file URL once available
const FIGMA_URL = 'https://www.figma.com/community/file/FIGMA_FILE_ID'

function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    // Sync with what the anti-FOUC script applied
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('solar-ui', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center rounded-md p-1.5 text-[var(--gray-11)] transition-colors hover:bg-[var(--gray-3)] hover:text-[var(--gray-12)]"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--gray-6)] bg-[var(--gray-1)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-[var(--gray-12)]"
        >
          <span className="text-base">☀️</span>
          Solar UI
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/docs"
            className="px-2 py-1.5 text-sm text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
          >
            Documentation
          </Link>
          <Link
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
          >
            <Figma size={15} />
            Figma
          </Link>
          <Link
            href="https://github.com/melvindesign/SolarUI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
          >
            <Github size={15} />
            GitHub
          </Link>
          <ThemeToggle />
          <Button variant="secondary" size="compact" asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            className="flex items-center justify-center rounded-md p-1.5 text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out sm:hidden"
        style={{ maxHeight: open ? '16rem' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="flex flex-col gap-1 border-t border-[var(--gray-6)] px-4 py-3">
          <Link
            href="/docs"
            onClick={() => setOpen(false)}
            className="py-2 text-sm text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
          >
            Documentation
          </Link>
          <Link
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 py-2 text-sm text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
          >
            <Figma size={15} />
            Figma
          </Link>
          <Link
            href="https://github.com/melvindesign/SolarUI"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 py-2 text-sm text-[var(--gray-11)] transition-colors hover:text-[var(--gray-12)]"
          >
            <Github size={15} />
            GitHub
          </Link>
          <div className="pt-1 pb-2">
            <Button variant="secondary" size="compact" asChild className="w-full">
              <Link href="/docs" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
