"use client"

import { useState } from "react"
import { Eye, EyeSlash, Key } from "@phosphor-icons/react/dist/ssr"
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
        <Key />
      </InputGroupAddon>
      <InputGroupInput
        type={showPassword ? "text" : "password"}
        placeholder="Password"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton onClick={() => setShowPassword((v) => !v)}>
          {showPassword ? <EyeSlash /> : <Eye />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export function InputGroupPasswordButtonDemo() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputGroup>
      <InputGroupInput
        type={showPassword ? "text" : "password"}
        placeholder="Password"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton onClick={() => setShowPassword((v) => !v)}>
          {showPassword ? <EyeSlash /> : <Eye />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
