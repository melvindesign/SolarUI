import type { Icon as PhosphorIconType, IconProps as PhosphorIconProps } from "@phosphor-icons/react"
import {
  // Arrows — simple directional
  ArrowDownIcon as PhArrowDown,
  ArrowDownLeftIcon as PhArrowDownLeft,
  ArrowDownRightIcon as PhArrowDownRight,
  ArrowLeftIcon as PhArrowLeft,
  ArrowRightIcon as PhArrowRight,
  ArrowUpIcon as PhArrowUp,
  ArrowUpLeftIcon as PhArrowUpLeft,
  ArrowUpRightIcon as PhArrowUpRight,
  // Arrows — arc
  ArrowArcLeftIcon as PhArrowArcLeft,
  ArrowArcRightIcon as PhArrowArcRight,
  // Arrows — bend
  ArrowBendDoubleUpLeftIcon as PhArrowBendDoubleUpLeft,
  ArrowBendDoubleUpRightIcon as PhArrowBendDoubleUpRight,
  ArrowBendDownLeftIcon as PhArrowBendDownLeft,
  ArrowBendDownRightIcon as PhArrowBendDownRight,
  ArrowBendLeftDownIcon as PhArrowBendLeftDown,
  ArrowBendLeftUpIcon as PhArrowBendLeftUp,
  ArrowBendRightDownIcon as PhArrowBendRightDown,
  ArrowBendRightUpIcon as PhArrowBendRightUp,
  ArrowBendUpLeftIcon as PhArrowBendUpLeft,
  ArrowBendUpRightIcon as PhArrowBendUpRight,
  // Arrows — circle
  ArrowCircleDownIcon as PhArrowCircleDown,
  ArrowCircleDownLeftIcon as PhArrowCircleDownLeft,
  ArrowCircleDownRightIcon as PhArrowCircleDownRight,
  ArrowCircleLeftIcon as PhArrowCircleLeft,
  ArrowCircleRightIcon as PhArrowCircleRight,
  ArrowCircleUpIcon as PhArrowCircleUp,
  ArrowCircleUpLeftIcon as PhArrowCircleUpLeft,
  ArrowCircleUpRightIcon as PhArrowCircleUpRight,
  // Arrows — clockwise
  ArrowClockwiseIcon as PhArrowClockwise,
  ArrowCounterClockwiseIcon as PhArrowCounterClockwise,
  // Arrows — elbow
  ArrowElbowDownLeftIcon as PhArrowElbowDownLeft,
  ArrowElbowDownRightIcon as PhArrowElbowDownRight,
  ArrowElbowLeftIcon as PhArrowElbowLeft,
  ArrowElbowLeftDownIcon as PhArrowElbowLeftDown,
  ArrowElbowLeftUpIcon as PhArrowElbowLeftUp,
  ArrowElbowRightIcon as PhArrowElbowRight,
  ArrowElbowRightDownIcon as PhArrowElbowRightDown,
  ArrowElbowRightUpIcon as PhArrowElbowRightUp,
  ArrowElbowUpLeftIcon as PhArrowElbowUpLeft,
  ArrowElbowUpRightIcon as PhArrowElbowUpRight,
  // Arrows — fat
  ArrowFatDownIcon as PhArrowFatDown,
  ArrowFatLeftIcon as PhArrowFatLeft,
  ArrowFatRightIcon as PhArrowFatRight,
  ArrowFatUpIcon as PhArrowFatUp,
  ArrowFatLineDownIcon as PhArrowFatLineDown,
  ArrowFatLineLeftIcon as PhArrowFatLineLeft,
  ArrowFatLineRightIcon as PhArrowFatLineRight,
  ArrowFatLineUpIcon as PhArrowFatLineUp,
  ArrowFatLinesDownIcon as PhArrowFatLinesDown,
  ArrowFatLinesLeftIcon as PhArrowFatLinesLeft,
  ArrowFatLinesRightIcon as PhArrowFatLinesRight,
  ArrowFatLinesUpIcon as PhArrowFatLinesUp,
  // Arrows — line
  ArrowLineDownIcon as PhArrowLineDown,
  ArrowLineDownLeftIcon as PhArrowLineDownLeft,
  ArrowLineDownRightIcon as PhArrowLineDownRight,
  ArrowLineLeftIcon as PhArrowLineLeft,
  ArrowLineRightIcon as PhArrowLineRight,
  ArrowLineUpIcon as PhArrowLineUp,
  ArrowLineUpLeftIcon as PhArrowLineUpLeft,
  ArrowLineUpRightIcon as PhArrowLineUpRight,
  // Arrows — square
  ArrowSquareDownIcon as PhArrowSquareDown,
  ArrowSquareDownLeftIcon as PhArrowSquareDownLeft,
  ArrowSquareDownRightIcon as PhArrowSquareDownRight,
  ArrowSquareInIcon as PhArrowSquareIn,
  ArrowSquareLeftIcon as PhArrowSquareLeft,
  ArrowSquareOutIcon as PhArrowSquareOut,
  ArrowSquareRightIcon as PhArrowSquareRight,
  ArrowSquareUpIcon as PhArrowSquareUp,
  ArrowSquareUpLeftIcon as PhArrowSquareUpLeft,
  ArrowSquareUpRightIcon as PhArrowSquareUpRight,
  // Arrows — U-turn
  ArrowUDownLeftIcon as PhArrowUDownLeft,
  ArrowUDownRightIcon as PhArrowUDownRight,
  ArrowULeftDownIcon as PhArrowULeftDown,
  ArrowULeftUpIcon as PhArrowULeftUp,
  ArrowURightDownIcon as PhArrowURightDown,
  ArrowURightUpIcon as PhArrowURightUp,
  ArrowUUpLeftIcon as PhArrowUUpLeft,
  ArrowUUpRightIcon as PhArrowUUpRight,
  // Arrows — multi / combined
  ArrowsClockwiseIcon as PhArrowsClockwise,
  ArrowsCounterClockwiseIcon as PhArrowsCounterClockwise,
  ArrowsDownUpIcon as PhArrowsDownUp,
  ArrowsHorizontalIcon as PhArrowsHorizontal,
  ArrowsInIcon as PhArrowsIn,
  ArrowsInCardinalIcon as PhArrowsInCardinal,
  ArrowsInLineHorizontalIcon as PhArrowsInLineHorizontal,
  ArrowsInLineVerticalIcon as PhArrowsInLineVertical,
  ArrowsInSimpleIcon as PhArrowsInSimple,
  ArrowsLeftRightIcon as PhArrowsLeftRight,
  ArrowsMergeIcon as PhArrowsMerge,
  ArrowsOutIcon as PhArrowsOut,
  ArrowsOutCardinalIcon as PhArrowsOutCardinal,
  ArrowsOutLineHorizontalIcon as PhArrowsOutLineHorizontal,
  ArrowsOutLineVerticalIcon as PhArrowsOutLineVertical,
  ArrowsOutSimpleIcon as PhArrowsOutSimple,
  ArrowsSplitIcon as PhArrowsSplit,
  ArrowsVerticalIcon as PhArrowsVertical,
  // Other
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
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowLeftIcon,
  ArrowLeftRightIcon,
  ArrowRightIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
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
  RotateCcwIcon,
  RotateCwIcon,
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
  // ─── Arrows — simple directional ─────────────────────────────────────────
  "arrow-down":       { phosphor: ph(PhArrowDown),      lucide: ArrowDownIcon },
  "arrow-down-left":  { phosphor: ph(PhArrowDownLeft),  lucide: ArrowDownLeftIcon },
  "arrow-down-right": { phosphor: ph(PhArrowDownRight), lucide: ArrowDownRightIcon },
  "arrow-left":       { phosphor: ph(PhArrowLeft),      lucide: ArrowLeftIcon },
  "arrow-right":      { phosphor: ph(PhArrowRight),     lucide: ArrowRightIcon },
  "arrow-up":         { phosphor: ph(PhArrowUp),        lucide: ArrowUpIcon },
  "arrow-up-left":    { phosphor: ph(PhArrowUpLeft),    lucide: ArrowUpLeftIcon },
  "arrow-up-right":   { phosphor: ph(PhArrowUpRight),   lucide: ArrowUpRightIcon },

  // ─── Arrows — arc ────────────────────────────────────────────────────────
  "arrow-arc-left":  { phosphor: ph(PhArrowArcLeft) },
  "arrow-arc-right": { phosphor: ph(PhArrowArcRight) },

  // ─── Arrows — bend ───────────────────────────────────────────────────────
  "arrow-bend-double-up-left":  { phosphor: ph(PhArrowBendDoubleUpLeft) },
  "arrow-bend-double-up-right": { phosphor: ph(PhArrowBendDoubleUpRight) },
  "arrow-bend-down-left":       { phosphor: ph(PhArrowBendDownLeft) },
  "arrow-bend-down-right":      { phosphor: ph(PhArrowBendDownRight) },
  "arrow-bend-left-down":       { phosphor: ph(PhArrowBendLeftDown) },
  "arrow-bend-left-up":         { phosphor: ph(PhArrowBendLeftUp) },
  "arrow-bend-right-down":      { phosphor: ph(PhArrowBendRightDown) },
  "arrow-bend-right-up":        { phosphor: ph(PhArrowBendRightUp) },
  "arrow-bend-up-left":         { phosphor: ph(PhArrowBendUpLeft) },
  "arrow-bend-up-right":        { phosphor: ph(PhArrowBendUpRight) },

  // ─── Arrows — circle ─────────────────────────────────────────────────────
  "arrow-circle-down":       { phosphor: ph(PhArrowCircleDown) },
  "arrow-circle-down-left":  { phosphor: ph(PhArrowCircleDownLeft) },
  "arrow-circle-down-right": { phosphor: ph(PhArrowCircleDownRight) },
  "arrow-circle-left":       { phosphor: ph(PhArrowCircleLeft) },
  "arrow-circle-right":      { phosphor: ph(PhArrowCircleRight) },
  "arrow-circle-up":         { phosphor: ph(PhArrowCircleUp) },
  "arrow-circle-up-left":    { phosphor: ph(PhArrowCircleUpLeft) },
  "arrow-circle-up-right":   { phosphor: ph(PhArrowCircleUpRight) },

  // ─── Arrows — clockwise ──────────────────────────────────────────────────
  "arrow-clockwise":         { phosphor: ph(PhArrowClockwise),        lucide: RotateCwIcon },
  "arrow-counter-clockwise": { phosphor: ph(PhArrowCounterClockwise), lucide: RotateCcwIcon },

  // ─── Arrows — elbow ──────────────────────────────────────────────────────
  "arrow-elbow-down-left":  { phosphor: ph(PhArrowElbowDownLeft) },
  "arrow-elbow-down-right": { phosphor: ph(PhArrowElbowDownRight) },
  "arrow-elbow-left":       { phosphor: ph(PhArrowElbowLeft) },
  "arrow-elbow-left-down":  { phosphor: ph(PhArrowElbowLeftDown) },
  "arrow-elbow-left-up":    { phosphor: ph(PhArrowElbowLeftUp) },
  "arrow-elbow-right":      { phosphor: ph(PhArrowElbowRight) },
  "arrow-elbow-right-down": { phosphor: ph(PhArrowElbowRightDown) },
  "arrow-elbow-right-up":   { phosphor: ph(PhArrowElbowRightUp) },
  "arrow-elbow-up-left":    { phosphor: ph(PhArrowElbowUpLeft) },
  "arrow-elbow-up-right":   { phosphor: ph(PhArrowElbowUpRight) },

  // ─── Arrows — fat ────────────────────────────────────────────────────────
  "arrow-fat-down":  { phosphor: ph(PhArrowFatDown) },
  "arrow-fat-left":  { phosphor: ph(PhArrowFatLeft) },
  "arrow-fat-right": { phosphor: ph(PhArrowFatRight) },
  "arrow-fat-up":    { phosphor: ph(PhArrowFatUp) },

  // ─── Arrows — fat line ───────────────────────────────────────────────────
  "arrow-fat-line-down":  { phosphor: ph(PhArrowFatLineDown) },
  "arrow-fat-line-left":  { phosphor: ph(PhArrowFatLineLeft) },
  "arrow-fat-line-right": { phosphor: ph(PhArrowFatLineRight) },
  "arrow-fat-line-up":    { phosphor: ph(PhArrowFatLineUp) },

  // ─── Arrows — fat lines ──────────────────────────────────────────────────
  "arrow-fat-lines-down":  { phosphor: ph(PhArrowFatLinesDown) },
  "arrow-fat-lines-left":  { phosphor: ph(PhArrowFatLinesLeft) },
  "arrow-fat-lines-right": { phosphor: ph(PhArrowFatLinesRight) },
  "arrow-fat-lines-up":    { phosphor: ph(PhArrowFatLinesUp) },

  // ─── Arrows — line ───────────────────────────────────────────────────────
  "arrow-line-down":       { phosphor: ph(PhArrowLineDown) },
  "arrow-line-down-left":  { phosphor: ph(PhArrowLineDownLeft) },
  "arrow-line-down-right": { phosphor: ph(PhArrowLineDownRight) },
  "arrow-line-left":       { phosphor: ph(PhArrowLineLeft) },
  "arrow-line-right":      { phosphor: ph(PhArrowLineRight) },
  "arrow-line-up":         { phosphor: ph(PhArrowLineUp) },
  "arrow-line-up-left":    { phosphor: ph(PhArrowLineUpLeft) },
  "arrow-line-up-right":   { phosphor: ph(PhArrowLineUpRight) },

  // ─── Arrows — square ─────────────────────────────────────────────────────
  "arrow-square-down":       { phosphor: ph(PhArrowSquareDown) },
  "arrow-square-down-left":  { phosphor: ph(PhArrowSquareDownLeft) },
  "arrow-square-down-right": { phosphor: ph(PhArrowSquareDownRight) },
  "arrow-square-in":         { phosphor: ph(PhArrowSquareIn) },
  "arrow-square-left":       { phosphor: ph(PhArrowSquareLeft) },
  "arrow-square-out":        { phosphor: ph(PhArrowSquareOut) },
  "arrow-square-right":      { phosphor: ph(PhArrowSquareRight) },
  "arrow-square-up":         { phosphor: ph(PhArrowSquareUp) },
  "arrow-square-up-left":    { phosphor: ph(PhArrowSquareUpLeft) },
  "arrow-square-up-right":   { phosphor: ph(PhArrowSquareUpRight) },

  // ─── Arrows — U-turn ─────────────────────────────────────────────────────
  "arrow-u-down-left":  { phosphor: ph(PhArrowUDownLeft) },
  "arrow-u-down-right": { phosphor: ph(PhArrowUDownRight) },
  "arrow-u-left-down":  { phosphor: ph(PhArrowULeftDown) },
  "arrow-u-left-up":    { phosphor: ph(PhArrowULeftUp) },
  "arrow-u-right-down": { phosphor: ph(PhArrowURightDown) },
  "arrow-u-right-up":   { phosphor: ph(PhArrowURightUp) },
  "arrow-u-up-left":    { phosphor: ph(PhArrowUUpLeft) },
  "arrow-u-up-right":   { phosphor: ph(PhArrowUUpRight) },

  // ─── Arrows — multi / combined ───────────────────────────────────────────
  "arrows-clockwise":          { phosphor: ph(PhArrowsClockwise),         lucide: RotateCwIcon },
  "arrows-counter-clockwise":  { phosphor: ph(PhArrowsCounterClockwise),  lucide: RotateCcwIcon },
  "arrows-down-up":            { phosphor: ph(PhArrowsDownUp),            lucide: ArrowUpDownIcon },
  "arrows-horizontal":         { phosphor: ph(PhArrowsHorizontal),        lucide: ArrowLeftRightIcon },
  "arrows-in":                 { phosphor: ph(PhArrowsIn) },
  "arrows-in-cardinal":        { phosphor: ph(PhArrowsInCardinal) },
  "arrows-in-line-horizontal": { phosphor: ph(PhArrowsInLineHorizontal) },
  "arrows-in-line-vertical":   { phosphor: ph(PhArrowsInLineVertical) },
  "arrows-in-simple":          { phosphor: ph(PhArrowsInSimple) },
  "arrows-left-right":         { phosphor: ph(PhArrowsLeftRight),         lucide: ArrowLeftRightIcon },
  "arrows-merge":              { phosphor: ph(PhArrowsMerge) },
  "arrows-out":                { phosphor: ph(PhArrowsOut) },
  "arrows-out-cardinal":       { phosphor: ph(PhArrowsOutCardinal) },
  "arrows-out-line-horizontal":{ phosphor: ph(PhArrowsOutLineHorizontal) },
  "arrows-out-line-vertical":  { phosphor: ph(PhArrowsOutLineVertical) },
  "arrows-out-simple":         { phosphor: ph(PhArrowsOutSimple) },
  "arrows-split":              { phosphor: ph(PhArrowsSplit) },
  "arrows-vertical":           { phosphor: ph(PhArrowsVertical),          lucide: ArrowUpDownIcon },

  // ─── Other ───────────────────────────────────────────────────────────────
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
