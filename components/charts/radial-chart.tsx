"use client"

import { RadialBar, RadialBarChart, PolarRadiusAxis, Label } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { name: "Jan", desktop: 186, mobile: 80 },
  { name: "Feb", desktop: 305, mobile: 200 },
  { name: "Mar", desktop: 237, mobile: 120 },
  { name: "Apr", desktop: 73, mobile: 190 },
  { name: "May", desktop: 209, mobile: 130 },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

export function RadialChartDefault() {
  return (
    <ChartContainer config={chartConfig} className="h-72 w-full">
      <RadialBarChart data={chartData} cx="50%" cy="50%" innerRadius={30} outerRadius={110}>
        <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
        <RadialBar dataKey="desktop" fill="var(--color-desktop)" background stackId="a" cornerRadius={4} />
        <RadialBar dataKey="mobile" fill="var(--color-mobile)" stackId="a" cornerRadius={4} />
      </RadialBarChart>
    </ChartContainer>
  )
}

export function RadialChartWithLabel() {
  const total = chartData.reduce((sum, d) => sum + d.desktop, 0)

  return (
    <ChartContainer config={chartConfig} className="h-72 w-full">
      <RadialBarChart data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={110} startAngle={90} endAngle={-270}>
        <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
        <PolarRadiusAxis tick={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-2xl font-bold">
                      {total.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 20} className="fill-muted-foreground text-xs">
                      Total
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar dataKey="desktop" fill="var(--color-desktop)" background cornerRadius={4} />
      </RadialBarChart>
    </ChartContainer>
  )
}
