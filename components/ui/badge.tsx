import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-default-8 focus-visible:ring-[3px] focus-visible:ring-default-7 aria-invalid:border-error-8 aria-invalid:ring-error-7 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-brand-9 text-brand-1 [a&]:hover:bg-brand-10",
        secondary:
          "bg-default-3 text-default-12 [a&]:hover:bg-default-4",
        destructive:
          "bg-error-9 text-error-1 focus-visible:ring-error-7 [a&]:hover:bg-error-10",
        outline:
          "border-default-6 text-default-12 [a&]:hover:bg-default-3 [a&]:hover:text-default-12",
        ghost: "[a&]:hover:bg-default-3 [a&]:hover:text-default-12",
        link: "text-brand-11 underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
