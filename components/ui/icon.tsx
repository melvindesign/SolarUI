"use client"

import * as React from "react"

import { defaultIconLibrary } from "@/lib/icons/config"
import { iconMap } from "@/lib/icons/icon-map"
import type { IconProps } from "@/lib/icons/types"

function Icon({
  name,
  library,
  size = 16,
  color,
  className,
  ...rest
}: IconProps) {
  const resolvedLibrary = library ?? defaultIconLibrary
  const entry = iconMap[name]

  if (!entry) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[Icon] Unknown icon name: "${name}"`)
    }
    return null
  }

  const IconComponent =
    (entry as Record<string, React.ElementType>)[resolvedLibrary] ??
    entry.phosphor ??
    entry.lucide

  if (!IconComponent) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[Icon] No component found for "${name}" in library "${resolvedLibrary}"`
      )
    }
    return null
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      {...rest}
    />
  )
}

export { Icon }
export type { IconProps }
