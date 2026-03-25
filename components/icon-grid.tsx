"use client"

import * as React from "react"

import { iconMap } from "@/lib/icons/icon-map"
import { icons } from "@/components/ui/icons"

function toPascal(name: string): string {
  return name
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")
}

function IconCell({ name }: { name: string }) {
  const componentName = `Icon${toPascal(name)}`
  const IconComponent = (icons as Record<string, React.FC<{ size?: number; className?: string }>>)[componentName]
  const [copied, setCopied] = React.useState(false)

  function handleClick() {
    navigator.clipboard.writeText(componentName).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  if (!IconComponent) return null

  return (
    <button
      onClick={handleClick}
      title={`Copy ${componentName}`}
      className="group flex flex-col items-center gap-2 rounded-lg p-2 text-center transition-colors hover:bg-default-3 cursor-pointer"
    >
      <div className="flex size-16 items-center justify-center rounded-md bg-default-3 group-hover:bg-default-4 transition-colors relative">
        {copied ? (
          <svg
            width={20}
            height={20}
            viewBox="0 0 256 256"
            className="text-success-9"
            fill="currentColor"
          >
            <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
          </svg>
        ) : (
          <IconComponent size={40} className="text-default-12" />
        )}
      </div>
      <span className="text-default-11 w-full truncate text-[11px] leading-tight">
        {name}
      </span>
    </button>
  )
}

const GROUPS: { label: string; filter: (name: string) => boolean }[] = [
  { label: "Arrows — simple",      filter: (n) => /^arrow-(down|up|left|right)(-|$)/.test(n) && !n.includes("circle") && !n.includes("fat") && !n.includes("line") && !n.includes("square") && !n.includes("bend") && !n.includes("arc") && !n.includes("clockwise") && !n.includes("elbow") && !n.includes("u-") },
  { label: "Arrows — arc",         filter: (n) => n.startsWith("arrow-arc") },
  { label: "Arrows — bend",        filter: (n) => n.startsWith("arrow-bend") },
  { label: "Arrows — circle",      filter: (n) => n.startsWith("arrow-circle") },
  { label: "Arrows — clockwise",   filter: (n) => n.startsWith("arrow-clockwise") || n.startsWith("arrow-counter") },
  { label: "Arrows — elbow",       filter: (n) => n.startsWith("arrow-elbow") },
  { label: "Arrows — fat",         filter: (n) => n.startsWith("arrow-fat") },
  { label: "Arrows — line",        filter: (n) => n.startsWith("arrow-line") },
  { label: "Arrows — square",      filter: (n) => n.startsWith("arrow-square") },
  { label: "Arrows — U-turn",      filter: (n) => n.startsWith("arrow-u-") },
  { label: "Arrows — combined",    filter: (n) => n.startsWith("arrows-") },
  { label: "UI",                   filter: (n) => !n.startsWith("arrow") },
]

export function IconGrid() {
  const allNames = Object.keys(iconMap)

  return (
    <div className="not-prose space-y-10 my-6">
      {GROUPS.map(({ label, filter }) => {
        const names = allNames.filter(filter)
        if (names.length === 0) return null
        return (
          <section key={label}>
            <h3 className="text-default-11 mb-3 text-xs font-semibold tracking-widest uppercase">
              {label}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1">
              {names.map((name) => (
                <IconCell key={name} name={name} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
