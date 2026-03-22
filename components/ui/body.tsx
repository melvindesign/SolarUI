import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import * as React from "react"

import { cn } from "@/lib/utils"

const bodyVariants = cva(
  "font-sans text-default-12",
  {
    variants: {
      variant: {
        default: "text-body tracking-body font-normal",
        compact: "text-body-compact tracking-body font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const variantTagMap = {
  default: "p",
  compact: "small",
} as const

type BodyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof bodyVariants> & {
    asChild?: boolean
  }

function Body({
  className,
  variant = "default",
  asChild = false,
  ...props
}: BodyProps) {
  const Comp = (asChild ? Slot.Root : variantTagMap[variant ?? "default"]) as React.ElementType

  return (
    <Comp
      data-slot="body"
      data-variant={variant}
      className={cn(bodyVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Body, bodyVariants }
