"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

export function SonnerDemo() {
  return (
    <>
      <Button variant="secondary" onClick={() => toast("Event has been created.")}>Show Toast</Button>
      <Toaster />
    </>
  )
}
