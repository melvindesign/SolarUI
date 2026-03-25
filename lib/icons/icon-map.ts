import type { Icon as PhosphorIconType, IconProps as PhosphorIconProps } from "@phosphor-icons/react"
import {
  ArrowLeftIcon as PhArrowLeft,
  ArrowRightIcon as PhArrowRight,
  CaretDownIcon as PhCaretDown,
  CaretLeftIcon as PhCaretLeft,
  CaretRightIcon as PhCaretRight,
  CaretUpIcon as PhCaretUp,
  CheckIcon as PhCheck,
  DotsThreeIcon as PhDotsThree,
  ListIcon as PhList,
  MinusIcon as PhMinus,
  MoonIcon as PhMoon,
  SidebarSimpleIcon as PhSidebarSimple,
  SunIcon as PhSun,
  XIcon as PhX,
} from "@phosphor-icons/react"
import * as React from "react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  MenuIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MoonIcon,
  PanelLeftIcon,
  SunIcon,
  XIcon,
} from "lucide-react"

import { defaultPhosphorWeight } from "./config"

/**
 * Wraps a Phosphor icon with a pre-configured weight.
 * Falls back to `defaultPhosphorWeight` from config if none is specified.
 * The weight can still be overridden per instance via props.
 *
 * @example
 * ph(PhCheck)           // uses defaultPhosphorWeight
 * ph(PhCheck, "bold")   // pre-configured as bold
 */
function ph(Component: PhosphorIconType, weight?: PhosphorIconProps["weight"]) {
  const resolvedWeight = weight ?? defaultPhosphorWeight
  function PhIcon(props: PhosphorIconProps) {
    return React.createElement(Component, { weight: resolvedWeight, ...props })
  }
  PhIcon.displayName = `Ph(${Component.displayName ?? "Icon"})`
  return PhIcon
}

export const iconMap = {
  "arrow-left":     { phosphor: ph(PhArrowLeft),     lucide: ArrowLeftIcon },
  "arrow-right":    { phosphor: ph(PhArrowRight),    lucide: ArrowRightIcon },
  "caret-down":     { phosphor: ph(PhCaretDown),     lucide: ChevronDownIcon },
  "caret-up":       { phosphor: ph(PhCaretUp),       lucide: ChevronUpIcon },
  "caret-left":     { phosphor: ph(PhCaretLeft),     lucide: ChevronLeftIcon },
  "caret-right":    { phosphor: ph(PhCaretRight),    lucide: ChevronRightIcon },
  "check":          { phosphor: ph(PhCheck),         lucide: CheckIcon },
  "dots-three":     { phosphor: ph(PhDotsThree),     lucide: MoreHorizontalIcon },
  "list":           { phosphor: ph(PhList),          lucide: MenuIcon },
  "minus":          { phosphor: ph(PhMinus),         lucide: MinusIcon },
  "moon":           { phosphor: ph(PhMoon),          lucide: MoonIcon },
  "sidebar-simple": { phosphor: ph(PhSidebarSimple), lucide: PanelLeftIcon },
  "sun":            { phosphor: ph(PhSun),           lucide: SunIcon },
  "x":              { phosphor: ph(PhX),             lucide: XIcon },
}
