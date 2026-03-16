"use client"

import { Switch as SwitchPrimitive } from "radix-ui"
import * as React from "react"

import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "compact" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "data-[state=checked]:bg-brand-9 data-[state=unchecked]:bg-default-5 focus-visible:border-default-8 focus-visible:ring-default-7 aria-invalid:ring-error-7 aria-invalid:border-error-8 shrink-0 rounded-full border border-transparent focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-4.5 data-[size=default]:w-8 data-[size=compact]:h-3.5 data-[size=compact]:w-6 peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "relative rounded-full pointer-events-none block ring-0 transition-transform",
          "bg-linear-to-t from-default-5 to-default-1",
          // Default size
          "group-data-[size=default]/switch:size-4",
          "group-data-[size=default]/switch:shadow-[0px_20.741px_29.037px_0px_rgba(0,0,0,0.09),0px_4.747px_6.643px_0px_rgba(0,0,0,0.19),0px_1.25px_1.748px_0px_rgba(0,0,0,0.22),0px_0.486px_0.681px_0px_rgba(0,0,0,0.2)]",
          "group-data-[size=default]/switch:data-[state=checked]:translate-x-[calc(100%-2px)]",
          "group-data-[size=default]/switch:data-[state=unchecked]:translate-x-0",
          // Compact size
          "group-data-[size=compact]/switch:size-3",
          "group-data-[size=compact]/switch:shadow-[0px_15.556px_21.778px_0px_rgba(0,0,0,0.09),0px_3.56px_4.982px_0px_rgba(0,0,0,0.19),0px_0.938px_1.311px_0px_rgba(0,0,0,0.22),0px_0.364px_0.511px_0px_rgba(0,0,0,0.2)]",
          "group-data-[size=compact]/switch:data-[state=checked]:translate-x-[calc(100%-2px)]",
          "group-data-[size=compact]/switch:data-[state=unchecked]:translate-x-0",
        )}
      >
        <span className="absolute inset-[3.33%] rounded-full overflow-hidden bg-linear-to-b from-default-3 to-default-4" />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
