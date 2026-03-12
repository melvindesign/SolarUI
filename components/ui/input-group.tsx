import * as React from "react"
import { cn } from "@/lib/utils"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      className={cn("group/input-group relative flex w-full", className)}
      {...props}
    />
  )
}

function InputGroupInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input-group-input"
      className={cn(
        "h-control w-full rounded-md border border-(--color-input) bg-(--color-background) px-3 py-2 text-sm",
        "placeholder:text-(--color-muted-foreground)",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-ring) focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // reserve space for inline addons via padding
        "group-has-[[data-align=inline-start]]/input-group:ps-10",
        "group-has-[[data-align=inline-end]]/input-group:pe-10",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="input-group-textarea"
      className={cn(
        "w-full rounded-md border border-(--color-input) bg-(--color-background) px-3 py-2 text-sm",
        "placeholder:text-(--color-muted-foreground)",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-ring) focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "group-has-[[data-align=block-end]]/input-group:pb-10",
        className
      )}
      {...props}
    />
  )
}

type AddonAlign = "inline-start" | "inline-end" | "block-start" | "block-end"

function InputGroupAddon({
  className,
  align = "inline-end",
  ...props
}: React.ComponentProps<"div"> & { align?: AddonAlign }) {
  return (
    <div
      data-slot="input-group-addon"
      data-align={align}
      className={cn(
        "text-muted-foreground pointer-events-none absolute flex items-center [&_svg]:size-4 [&_svg]:shrink-0",
        // inline addons: vertically centered
        (align === "inline-start" || align === "inline-end") && "top-1/2 -translate-y-1/2",
        align === "inline-start" && "start-3",
        align === "inline-end" && "end-3",
        // block addons: horizontally centered at bottom
        align === "block-end" && "bottom-2 end-3 pointer-events-auto",
        align === "block-start" && "top-2 end-3",
        // allow buttons to be clickable
        "[&_button]:pointer-events-auto",
        className
      )}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="input-group-text"
      className={cn("text-muted-foreground select-none text-sm", className)}
      {...props}
    />
  )
}

function InputGroupButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="input-group-button"
      type="button"
      className={cn(
        "text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded transition-colors",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
}
