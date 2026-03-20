import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-[39px] w-full min-w-0 rounded-lg border px-3 text-sm font-light tracking-[0.4px] transition-colors outline-none placeholder:text-default-11 text-default-12 focus-visible:ring-3 focus-visible:ring-default-7 aria-invalid:ring-3 aria-invalid:ring-error-7 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-default-12",
        className
      )}
      {...props}
    />
  )
}

export { Input }
