import * as React from 'react'
import { cn } from '@/lib/utils'

export function ComponentPreview({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'not-prose flex min-h-[140px] w-full items-center justify-center rounded-lg border p-8 my-6',
        'border-default-6 bg-default-1',
        className
      )}
    >
      {children}
    </div>
  )
}

export function ComponentPreviewRow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'not-prose flex min-h-[140px] w-full flex-wrap items-center justify-center gap-4 rounded-lg border p-8 my-6',
        'border-default-6 bg-default-1',
        className
      )}
    >
      {children}
    </div>
  )
}
