'use client'

import { Check, Copy } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'

const COMMAND = 'npx shadcn@latest add https://solar-ui.com/r/solar-ui.json'

export default function InstallCommand() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-0 rounded-lg border border-[var(--gray-6)] bg-[var(--gray-2)] px-4 py-2.5 font-mono text-sm text-[var(--gray-11)]">
      <span className="flex-1 select-all truncate">{COMMAND}</span>
      <button
        onClick={handleCopy}
        aria-label="Copy install command"
        className="ml-3 shrink-0 rounded-md p-1 text-[var(--gray-9)] transition-colors hover:bg-[var(--gray-4)] hover:text-[var(--gray-12)]"
      >
        {copied ? <Check size={15} className="text-[var(--green-9)]" /> : <Copy size={15} />}
      </button>
    </div>
  )
}
