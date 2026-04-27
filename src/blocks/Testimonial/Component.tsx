import React from 'react'
import { cn } from '@/utilities/ui'

import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'

const bgClasses: Record<string, { section: string; quote: string; mark: string }> = {
  default: { section: 'bg-muted text-foreground', quote: 'text-primary', mark: 'text-secondary' },
  primary: { section: 'bg-primary text-primary-foreground', quote: 'text-primary-foreground', mark: 'text-secondary' },
  secondary: { section: 'bg-secondary text-secondary-foreground', quote: 'text-secondary-foreground', mark: 'text-primary' },
}

export const TestimonialBlock: React.FC<TestimonialBlockProps> = ({
  quote,
  author,
  backgroundColor,
}) => {
  const colors = bgClasses[backgroundColor || 'primary']

  return (
    <section className={cn('py-20 lg:py-28', colors.section)}>
      <div className="container max-w-5xl mx-auto text-center">
        <div className="relative inline-block">
          <span className={cn('absolute -top-8 -left-12 md:-top-12 md:-left-16 text-[8rem] md:text-[12rem] font-heading leading-none select-none opacity-80', colors.mark)}>
            &ldquo;
          </span>
          <blockquote className={cn('font-heading text-3xl md:text-5xl lg:text-6xl leading-snug mb-8 relative z-10', colors.quote)}>
            {quote}
          </blockquote>
        </div>
        {author && (
          <p className="text-sm uppercase tracking-widest opacity-70">&mdash; {author}</p>
        )}
      </div>
    </section>
  )
}
