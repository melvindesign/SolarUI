"use client"

import { useState } from "react"
import { EyeIcon, EyeOffIcon, KeyRoundIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupPasswordDemo() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <KeyRoundIcon />
      </InputGroupAddon>
      <InputGroupInput
        type={showPassword ? "text" : "password"}
        placeholder="Password"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton onClick={() => setShowPassword((v) => !v)}>
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
