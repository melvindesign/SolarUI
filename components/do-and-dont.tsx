import * as React from 'react'
import { cn } from '@/lib/utils'

export function DoAndDont({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('not-prose grid grid-cols-2 gap-4 my-6', className)}>
      {children}
    </div>
  )
}

export function Do({ children, label = 'Do' }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-green-500/25">
      <div className="flex min-h-[120px] items-center justify-center bg-(--color-background) p-8">
        {children}
      </div>
      <div className="flex items-center gap-2 border-t border-green-500/25 bg-green-500/5 px-4 py-2.5 text-sm font-medium text-green-600 dark:text-green-400">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <circle cx="7" cy="7" r="6.5" stroke="currentColor"/>
          <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {label}
      </div>
    </div>
  )
}

export function Dont({ children, label = "Don't" }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-red-500/25">
      <div className="flex min-h-[120px] items-center justify-center bg-(--color-background) p-8">
        {children}
      </div>
      <div className="flex items-center gap-2 border-t border-red-500/25 bg-red-500/5 px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <circle cx="7" cy="7" r="6.5" stroke="currentColor"/>
          <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        {label}
      </div>
    </div>
  )
}
