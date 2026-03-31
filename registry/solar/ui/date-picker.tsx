"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          data-empty={!date}
          className="w-64 justify-start text-left font-normal data-[empty=true]:text-default-11"
        >
          <CalendarBlank className="mr-2 size-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}

export function DateRangePickerDemo({ className }: { className?: string }) {
  const [range, setRange] = React.useState<DateRange | undefined>()

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            data-empty={!range?.from}
            className="w-72 justify-start text-left font-normal data-[empty=true]:text-default-11"
          >
            <CalendarBlank className="mr-2 size-4" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "LLL dd, y")} – {format(range.to, "LLL dd, y")}
                </>
              ) : (
                format(range.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>()

  const presets = [
    { label: "Today", value: new Date() },
    { label: "Tomorrow", value: new Date(Date.now() + 86400000) },
    { label: "In a week", value: new Date(Date.now() + 7 * 86400000) },
    { label: "In a month", value: new Date(Date.now() + 30 * 86400000) },
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          data-empty={!date}
          className="w-64 justify-start text-left font-normal data-[empty=true]:text-default-11"
        >
          <CalendarBlank className="mr-2 size-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2 p-2">
        <div className="flex flex-col gap-1">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="ghost"
              size="compact"
              className="justify-start"
              onClick={() => setDate(preset.value)}
            >
              {preset.label}
            </Button>
          ))}
        </div>
        <div className="border-t pt-2">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
