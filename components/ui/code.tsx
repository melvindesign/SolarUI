import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import * as React from "react"

import { cn } from "@/lib/utils"

const codeVariants = cva(
  "font-mono text-default-12",
  {
    variants: {
      variant: {
        default: "text-code font-normal",
        compact: "text-code-compact font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type CodeProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof codeVariants> & {
    asChild?: boolean
  }

function Code({
  className,
  variant = "default",
  asChild = false,
  ...props
}: CodeProps) {
  const Comp = asChild ? Slot.Root : "code"

  return (
    <Comp
      data-slot="code"
      data-variant={variant}
      className={cn(codeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Code, codeVariants }
