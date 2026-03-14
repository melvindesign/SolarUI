"use client"

import * as React from "react"
import { GlobeIcon, GitBranchIcon, ServerIcon, PackageIcon, FlameIcon, StarIcon, SearchIcon } from "lucide-react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { InputGroupAddon } from "@/components/ui/input-group"

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "astro", label: "Astro" },
  { value: "solid-start", label: "SolidStart" },
]

type Framework = (typeof frameworks)[0]

// (a) Basic
export function ComboboxBasicDemo() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework..." className="w-56" />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Framework) => (
            <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

// (b) Multiple
export function ComboboxMultipleDemo() {
  const anchor = useComboboxAnchor()
  const [selected, setSelected] = React.useState<string[]>([])

  return (
    <Combobox multiple items={frameworks} value={selected} onValueChange={setSelected}>
      <ComboboxChips ref={anchor} className="w-72">
        {selected.map((v) => {
          const item = frameworks.find((f) => f.value === v)
          return <ComboboxChip key={v}>{item?.label ?? v}</ComboboxChip>
        })}
        <ComboboxChipsInput placeholder={selected.length === 0 ? "Select frameworks..." : ""} />
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Framework) => (
            <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

// (c) Clear button
export function ComboboxClearDemo() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework..." className="w-56" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Framework) => (
            <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

// (d) Groups
const groupedFrameworks = [
  { label: "React", items: [{ value: "next.js", label: "Next.js" }, { value: "remix", label: "Remix" }] },
  { label: "Vue", items: [{ value: "nuxt.js", label: "Nuxt.js" }] },
  { label: "Other", items: [{ value: "sveltekit", label: "SvelteKit" }, { value: "astro", label: "Astro" }, { value: "solid-start", label: "SolidStart" }] },
]

type FrameworkGroup = (typeof groupedFrameworks)[0]

export function ComboboxGroupsDemo() {
  return (
    <Combobox items={groupedFrameworks}>
      <ComboboxInput placeholder="Select a framework..." className="w-56" />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(group: FrameworkGroup) => (
            <ComboboxGroup key={group.label}>
              <ComboboxLabel>{group.label}</ComboboxLabel>
              {group.items.map((item) => (
                <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
              ))}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

// (e) Custom items
const technologies = [
  { value: "next.js", label: "Next.js", icon: <GitBranchIcon />, description: "React framework" },
  { value: "sveltekit", label: "SvelteKit", icon: <FlameIcon />, description: "Svelte framework" },
  { value: "nuxt.js", label: "Nuxt.js", icon: <ServerIcon />, description: "Vue framework" },
  { value: "remix", label: "Remix", icon: <PackageIcon />, description: "Fullstack framework" },
  { value: "astro", label: "Astro", icon: <StarIcon />, description: "Static site generator" },
  { value: "solid-start", label: "SolidStart", icon: <GlobeIcon />, description: "SolidJS framework" },
]

type Technology = (typeof technologies)[0]

export function ComboboxCustomItemsDemo() {
  return (
    <Combobox items={technologies}>
      <ComboboxInput placeholder="Select a framework..." className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Technology) => (
            <ComboboxItem key={item.value} value={item.value} className="pr-8">
              {item.icon}
              <div className="flex flex-col">
                <span className="font-medium">{item.label}</span>
                <span className="text-default-11 text-xs">{item.description}</span>
              </div>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

// (f) Invalid and Disabled
export function ComboboxInvalidDisabledDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Field data-invalid="true">
        <FieldLabel>Framework</FieldLabel>
        <Combobox items={frameworks}>
          <ComboboxInput placeholder="Select a framework..." aria-invalid="true" />
          <ComboboxContent>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxList>
              {(item: Framework) => (
                <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <FieldError>Please select a framework.</FieldError>
      </Field>
      <Field>
        <FieldLabel>Framework</FieldLabel>
        <Combobox disabled items={frameworks}>
          <ComboboxInput placeholder="Select a framework..." disabled />
          <ComboboxContent>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxList>
              {(item: Framework) => (
                <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Field>
    </div>
  )
}

// (g) Auto-highlight
export function ComboboxAutoHighlightDemo() {
  return (
    <Combobox autoHighlight items={frameworks}>
      <ComboboxInput placeholder="Type to search..." className="w-56" />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Framework) => (
            <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

// (h) Pop-up
export function ComboboxPopupDemo() {
  return (
    <Combobox items={frameworks}>
      <ComboboxTrigger className="flex h-8 w-56 items-center justify-between gap-2 rounded-lg border bg-default-1 px-2.5 text-sm font-normal">
        <ComboboxValue placeholder="Select a framework..." />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search..." autoFocus />
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Framework) => (
            <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

// (i) Input-group
export function ComboboxInputGroupDemo() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Search frameworks..." className="w-64">
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Framework) => (
            <ComboboxItem key={item.value} value={item.value}>{item.label}</ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
