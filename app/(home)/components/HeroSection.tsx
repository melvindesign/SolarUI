'use client'

import { bodyVariants } from '@/components/ui/body'
import { Button } from '@/components/ui/button'
import { displayVariants } from '@/components/ui/display'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import Link from 'next/link'
import { TextAnimate } from '../../../components/ui/text-animate'
import InstallCommand from './InstallCommand'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Headline */}
        <h1 className={cn(displayVariants({ size: '1' }), 'max-w-2xl flex flex-wrap')}>
          <TextAnimate as="span" animation="blurInUp" by="word" className="w-full">
            The Design System built
          </TextAnimate>
          <TextAnimate as="span" animation="blurInUp" by="word" delay={0.2}>
            for your product interfaces
          </TextAnimate>
          <motion.span
            className="text-brand-11 inline-block"
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >.</motion.span>
        </h1>

        {/* Sub-headline */}
        <TextAnimate
          as="p"
          animation="blurInUp"
          by="word"
          delay={0.5}
          className={cn(bodyVariants(), 'mt-3 text-default-11')}
        >
          Open code built on shadcn/ui. Copy it, own it, adopt it
        </TextAnimate>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button variant="primary" asChild>
            <Link href="/docs/components/button">Browse components</Link>
          </Button>
          <div className="w-full max-w-sm sm:w-auto">
            <InstallCommand />
          </div>
        </div>
      </div>
    </section>
  )
}
