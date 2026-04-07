'use client'

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Check, Copy } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'

const COMMAND = 'npx shadcn@latest add https://www.solar-ui.com/r/solar-ui.json'

export default function InstallCommand() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <InputGroup className="font-mono w-[340px]">
      <InputGroupInput readOnly value={COMMAND} className="select-all" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton onClick={handleCopy} aria-label="Copy install command" size="icon-sm">
          {copied ? <Check size={15} className="text-success-9" /> : <Copy size={15} />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
