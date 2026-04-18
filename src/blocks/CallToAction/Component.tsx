import React from 'react'
import { cn } from '@/utilities/ui'

import type { CallToActionBlock as CTABlockProps, Media } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

const overlayClasses: Record<string, string> = {
  light: 'bg-black/30',
  medium: 'bg-black/50',
  dark: 'bg-black/70',
}

export const CallToActionBlock: React.FC<CTABlockProps> = ({
  backgroundImage,
  overlayOpacity,
  links,
  richText,
}) => {
  const image = backgroundImage as Media | undefined
  const imageUrl = image?.url
  const hasBackground = Boolean(imageUrl)

  return (
    <div className={hasBackground ? '' : 'container'}>
      <div
        className={cn(
          'relative flex flex-col items-center justify-center gap-6 px-8',
          hasBackground
            ? 'bg-cover bg-center bg-fixed text-white min-h-[500px] py-32 lg:py-40'
            : 'bg-card border border-border',
        )}
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
      >
        {hasBackground && (
          <div
            className={cn(
              'absolute inset-0',
              overlayClasses[overlayOpacity || 'medium'],
            )}
          />
        )}
        <div className="relative z-10 max-w-3xl w-full">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        {links && links.length > 0 && (
          <div className="relative z-10 flex flex-wrap gap-4 justify-center">
            {links.map(({ link }, i) => (
              <CMSLink key={i} size="lg" {...link} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
