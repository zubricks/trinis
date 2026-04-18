'use client'

import React from 'react'
import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link'

import type { ParallaxHeroBlock as ParallaxHeroBlockProps, Media } from '@/payload-types'

const overlayClasses: Record<string, string> = {
  light: 'bg-black/30',
  medium: 'bg-black/50',
  dark: 'bg-black/70',
}

export const ParallaxHeroBlock: React.FC<ParallaxHeroBlockProps> = ({
  backgroundImage,
  heading,
  subheading,
  link,
  overlayOpacity,
}) => {
  const image = backgroundImage as Media | undefined
  const imageUrl = image?.url

  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
    >
      <div
        className={cn(
          'absolute inset-0',
          overlayClasses[overlayOpacity || 'medium'],
        )}
      />
      <div className="relative z-10 text-center text-white px-4 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">{heading}</h1>
        {subheading && (
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">{subheading}</p>
        )}
        {link?.label && (
          <CMSLink
            {...link}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-lg font-semibold rounded hover:opacity-90 transition-opacity"
          />
        )}
      </div>
    </section>
  )
}
