"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

export function RadarChartDefault() {
  return (
    <ChartContainer config={chartConfig} className="h-72 w-full">
      <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="80%">
        <PolarGrid />
        <PolarAngleAxis dataKey="month" />
        <ChartTooltip content={(props) => <ChartTooltipContent {...(props as any)} />} />
        <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.3} stroke="var(--color-desktop)" strokeWidth={2} />
        <Radar dataKey="mobile" fill="var(--color-mobile)" fillOpacity={0.3} stroke="var(--color-mobile)" strokeWidth={2} />
      </RadarChart>
    </ChartContainer>
  )
}

export function RadarChartSingle() {
  return (
    <ChartContainer config={chartConfig} className="h-72 w-full">
      <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="80%">
        <PolarGrid />
        <PolarAngleAxis dataKey="month" />
        <ChartTooltip content={(props) => <ChartTooltipContent {...(props as any)} />} />
        <Radar
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={{ r: 4, fillOpacity: 1 }}
        />
      </RadarChart>
    </ChartContainer>
  )
}
