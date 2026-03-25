"use client"

import * as React from "react"

import { defaultIconLibrary } from "@/lib/icons/config"
import { iconMap } from "@/lib/icons/icon-map"
import type { IconName } from "@/lib/icons/types"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NamedIconProps extends React.SVGProps<SVGSVGElement> {
  library?: string
  size?: number | string
  color?: string
  className?: string
}

/** Converts kebab-case to PascalCase: "arrow-left" → "ArrowLeft" */
type ToPascal<S extends string> = S extends `${infer A}-${infer B}`
  ? `${Capitalize<A>}${ToPascal<B>}`
  : Capitalize<S>

/** Maps every iconMap key to its named component: "arrow-left" → "IconArrowLeft" */
export type IconComponents = {
  [K in IconName as `Icon${ToPascal<K>}`]: React.FC<NamedIconProps>
}

// ─── Builder ─────────────────────────────────────────────────────────────────

function toPascal(name: string): string {
  return name
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("")
}

function buildIconComponents(): IconComponents {
  const result = {} as Record<string, React.FC<NamedIconProps>>

  for (const name of Object.keys(iconMap) as IconName[]) {
    const componentName = `Icon${toPascal(name)}`

    const NamedIcon: React.FC<NamedIconProps> = ({
      library,
      size = 16,
      color,
      className,
      ...rest
    }) => {
      const resolvedLibrary = library ?? defaultIconLibrary
      const entry = iconMap[name]
      const anyEntry = entry as Record<string, React.ElementType | undefined>
      const IconComponent =
        anyEntry[resolvedLibrary] ?? anyEntry.phosphor ?? anyEntry.lucide

      if (!IconComponent) return null

      return (
        <IconComponent
          size={size}
          color={color}
          className={className}
          {...rest}
        />
      )
    }

    NamedIcon.displayName = componentName
    result[componentName] = NamedIcon
  }

  return result as IconComponents
}

// ─── Export ───────────────────────────────────────────────────────────────────

/**
 * A typed object containing one named component per icon in the icon map.
 *
 * @example
 * import { icons } from "@/components/ui/icons"
 *
 * const { IconArrowLeft, IconCheck, IconX } = icons
 *
 * <IconArrowLeft size={20} />
 */
export const icons: IconComponents = buildIconComponents()
