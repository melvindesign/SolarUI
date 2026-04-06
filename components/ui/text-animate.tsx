'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion, type MotionProps, type Variants } from 'motion/react'
import * as React from 'react'

type AnimationVariant = 'blurInUp' | 'fadeIn' | 'slideUp'
type SegmentType = 'word' | 'character'

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0 },
}

const animationVariants: Record<AnimationVariant, { container: Variants; item: Variants }> = {
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
      show: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          y: { duration: 0.35 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.35 },
        },
      },
      exit: { opacity: 0, filter: 'blur(10px)', y: 20 },
    },
  },
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0 },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, y: 20 },
    },
  },
}

interface TextAnimateProps extends Omit<MotionProps, 'children'> {
  children: string
  className?: string
  segmentClassName?: string
  delay?: number
  duration?: number
  animation?: AnimationVariant
  by?: SegmentType
  startOnView?: boolean
  once?: boolean
  as?: keyof typeof motion
}

export function TextAnimate({
  children,
  className,
  segmentClassName,
  delay = 0,
  animation = 'blurInUp',
  by = 'word',
  startOnView = true,
  once = true,
  as = 'p',
  ...props
}: TextAnimateProps) {
  const segments = by === 'word' ? children.split(' ') : children.split('')

  const { container, item } = animationVariants[animation]

  const containerVariants: Variants = {
    ...container,
    show: {
      ...((container.show as Record<string, unknown>) ?? {}),
      transition: {
        ...((container.show as { transition?: Record<string, unknown> })?.transition ?? {}),
        delayChildren: delay,
      },
    },
  }

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.p

  return (
    <AnimatePresence>
      <MotionTag
        className={cn('flex flex-wrap', className)}
        variants={containerVariants}
        initial="hidden"
        {...(startOnView ? { whileInView: 'show', viewport: { once } } : { animate: 'show' })}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span key={i} variants={item} className={cn('inline-block', segmentClassName)}>
            {by === 'word' ? (i < segments.length - 1 ? segment + '\u00A0' : segment) : segment}
          </motion.span>
        ))}
      </MotionTag>
    </AnimatePresence>
  )
}
