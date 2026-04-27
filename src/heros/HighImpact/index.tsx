'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import { cn } from '@/utilities/ui'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

const bgColorClasses: Record<string, { bg: string; text: string }> = {
  primary: { bg: 'bg-primary', text: 'text-primary-foreground' },
  secondary: { bg: 'bg-secondary', text: 'text-secondary-foreground' },
  cream: { bg: 'bg-background', text: 'text-foreground' },
  gold: { bg: 'bg-[#ffd99b]', text: 'text-foreground' },
}

export const HighImpactHero: React.FC<Page['hero']> = ({
  links,
  media,
  richText,
  backgroundColor,
  marqueeText,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  const hasMedia = media && typeof media === 'object'
  const bgColor =
    backgroundColor && backgroundColor !== 'none' ? bgColorClasses[backgroundColor] : null
  const isDark = hasMedia || (bgColor && backgroundColor !== 'cream')

  useEffect(() => {
    if (isDark) {
      setHeaderTheme('dark')
    }
  })

  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        hasMedia ? 'text-white' : bgColor ? cn(bgColor.bg, bgColor.text) : 'text-foreground',
      )}
      {...(isDark ? { 'data-theme': 'dark' } : {})}
    >
      <div className="container pt-48 pb-20 lg:pt-56 lg:pb-28 z-10 relative flex items-center justify-center">
        <div className={cn(
          'max-w-[54rem] md:text-center [&_h1]:leading-none [&_h1]:text-secondary [&_h2]:text-secondary',
          (!bgColor || backgroundColor === 'cream' || backgroundColor === 'gold') && '[&_h5]:text-black',
        )}>
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4 [&_button]:bg-primary [&_button]:text-white [&_button]:hover:bg-primary/90 [&_a[data-slot=button]]:bg-primary [&_a[data-slot=button]]:text-white [&_a[data-slot=button]]:hover:bg-primary/90">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      {hasMedia && <div className="absolute inset-0 bg-black/50 z-[1]" />}
      {hasMedia && (
        <div className="min-h-[80vh] select-none">
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        </div>
      )}
      {marqueeText && (
        <div className="absolute left-4 lg:left-8 top-0 bottom-0 z-20 hidden md:flex items-center overflow-hidden w-8">
          <div className="animate-marquee-vertical whitespace-nowrap font-heading text-primary text-lg uppercase tracking-[0.3em] writing-vertical">
            <span className="inline-block py-8">{marqueeText}</span>
            <span className="inline-block py-8">{marqueeText}</span>
            <span className="inline-block py-8">{marqueeText}</span>
          </div>
        </div>
      )}
      <div
        className="absolute -bottom-3 left-0 right-0 h-6 z-20"
        style={{
          backgroundImage: `repeating-conic-gradient(#000 0% 25%, transparent 0% 50%)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  )
}
