"use client"

import { Label as LabelPrimitive } from "radix-ui"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "font-sans font-medium text-default-12 tracking-label flex items-center gap-2 select-none group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "text-label",
        compact: "text-label-compact",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>

function Label({ className, variant, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Label, labelVariants }
