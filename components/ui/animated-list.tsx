"use client"

import { AnimatePresence, motion, type MotionProps } from "motion/react"
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    const instanceCounter = useRef(childrenArray.length)
    const nextChildIndex = useRef(0)

    const [displayItems, setDisplayItems] = useState<
      { id: number; childIndex: number }[]
    >(() => childrenArray.map((_, i) => ({ id: i, childIndex: i })))

    useEffect(() => {
      const timeout = setTimeout(() => {
        const newId = instanceCounter.current++
        const childIndex = nextChildIndex.current
        nextChildIndex.current =
          (nextChildIndex.current + 1) % childrenArray.length

        setDisplayItems((prev) => [
          { id: newId, childIndex },
          ...prev.slice(0, prev.length - 1),
        ])
      }, delay)

      return () => clearTimeout(timeout)
    }, [displayItems, delay, childrenArray.length])

    return (
      <div className={cn("flex flex-col items-center", className)} {...props}>
        <AnimatePresence>
          {displayItems.map(({ id, childIndex }) => (
            <AnimatedListItem key={id}>
              {childrenArray[childIndex]}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
