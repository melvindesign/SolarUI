"use client"

import { Pie, PieChart, Cell } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 },
]

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome:  { label: "Chrome",  color: "var(--chart-1)" },
  safari:  { label: "Safari",  color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge:    { label: "Edge",    color: "var(--chart-4)" },
  other:   { label: "Other",   color: "var(--chart-5)" },
} satisfies ChartConfig

export function PieChartDefault() {
  return (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <PieChart>
        <ChartTooltip content={(props) => <ChartTooltipContent {...(props as any)} nameKey="browser" hideLabel />} />
        <Pie data={chartData} dataKey="visitors" nameKey="browser" cx="50%" cy="50%" outerRadius={90}>
          {chartData.map((entry) => (
            <Cell key={entry.browser} fill={`var(--color-${entry.browser})`} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}

export function PieChartDonut() {
  return (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <PieChart>
        <ChartTooltip content={(props) => <ChartTooltipContent {...(props as any)} nameKey="browser" hideLabel />} />
        <Pie data={chartData} dataKey="visitors" nameKey="browser" cx="50%" cy="50%" innerRadius={50} outerRadius={90}>
          {chartData.map((entry) => (
            <Cell key={entry.browser} fill={`var(--color-${entry.browser})`} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
