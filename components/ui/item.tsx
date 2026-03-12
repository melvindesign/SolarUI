import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

function Item({
  className,
  asChild,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      data-slot="item"
      className={cn("flex items-center gap-3 py-2", className)}
      {...props}
    />
  )
}

function ItemMedia({
  className,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & { variant?: "icon" | "image" | "avatar" }) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(
        "flex shrink-0 items-center justify-center",
        variant === "icon" &&
          "bg-muted text-muted-foreground size-9 rounded-md [&_svg]:size-4 [&_svg]:shrink-0",
        variant === "avatar" && "size-9 overflow-hidden rounded-full",
        variant === "image" && "size-12 overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-title"
      className={cn("truncate text-sm font-medium leading-none", className)}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn("text-muted-foreground truncate text-xs", className)}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("ml-auto flex shrink-0 items-center gap-2", className)}
      {...props}
    />
  )
}

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-group"
      className={cn("flex flex-col", className)}
      {...props}
    />
  )
}

export { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle }
