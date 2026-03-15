import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-visible:border-default-8 focus-visible:ring-default-7 aria-invalid:ring-error-7 aria-invalid:border-error-8 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 active:translate-y-px [&_svg:not([class*='size-'])]:size-4 group/button inline-flex flex-row shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-default-12 text-default-1 hover:bg-default-11",
        primary: "bg-brand-9 text-brand-1 hover:bg-brand-10",
        outline: "border-default-6 bg-default-1 hover:bg-default-3 hover:text-default-12 aria-expanded:bg-default-3 aria-expanded:text-default-12",
        secondary: "bg-default-3 text-default-12 hover:bg-default-4 aria-expanded:bg-default-3 aria-expanded:text-default-12",
        ghost: "hover:bg-default-3 hover:text-default-12 aria-expanded:bg-default-3 aria-expanded:text-default-12",
        destructive: "bg-error-3 hover:bg-error-4 focus-visible:ring-error-7 text-error-11 focus-visible:border-error-7",
        link: "text-brand-11 underline-offset-4 hover:underline",
      },
      size: {
        default: "gap-1.5 pt-1 pb-1 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        compact: "gap-1 py-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        icon: "size-9 [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
