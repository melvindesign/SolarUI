"use client";

import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        `border-default-7 
        aria-checked:bg-brand-9 aria-checked:text-brand-1 aria-checked:border-brand-9 
        aria-invalid:aria-checked:border-brand-9 aria-invalid:border-error-8 aria-invalid:ring-error-7 aria-invalid:ring-3
        focus-visible:border-default-8 focus-visible:ring-default-7 focus-visible:ring-3
        flex size-4 items-center justify-center rounded-[4px] border transition-colors group-has-disabled/field:opacity-50 peer relative shrink-0 outline-none 
        after:absolute after:-inset-x-3 after:-inset-y-2 
        disabled:cursor-not-allowed disabled:opacity-50`,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="[&>svg]:size-3.5 grid place-content-center text-current transition-none"
      >
        <Icon name="check" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
