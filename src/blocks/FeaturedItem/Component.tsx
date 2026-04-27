import React from 'react'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { FeaturedItemBlock as FeaturedItemBlockProps } from '@/payload-types'

const Starburst: React.FC<{ text: string }> = ({ text }) => (
  <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full text-secondary"
      fill="currentColor"
    >
      <polygon points="50,0 61,35 97,35 68,57 79,91 50,70 21,91 32,57 3,35 39,35" />
      <polygon points="50,5 58,38 90,20 72,52 100,50 72,48 90,80 58,62 50,95 42,62 10,80 28,48 0,50 28,52 10,20 42,38" />
    </svg>
    <span className="relative z-10 font-heading text-xs md:text-sm text-white uppercase tracking-wider text-center leading-tight max-w-[5rem]">
      {text}
    </span>
  </div>
)

export const FeaturedItemBlock: React.FC<FeaturedItemBlockProps> = ({
  alignment,
  image,
  badges,
  name,
  price,
  description,
}) => {
  const isImageLeft = alignment === 'imageLeft'

  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className={cn('relative', isImageLeft ? '' : 'order-1 lg:order-2')}>
          {badges && badges.length > 0 && (
            <div className="absolute -top-4 -left-2 md:-top-6 md:-left-4 z-10 flex gap-2">
              {badges.map((badge, i) => (
                <Starburst key={i} text={badge.text} />
              ))}
            </div>
          )}
          {image && typeof image === 'object' && (
            <Media
              resource={image}
              imgClassName="w-full h-auto object-cover"
            />
          )}
        </div>
        <div className={cn(isImageLeft ? '' : 'order-2 lg:order-1')}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-4 !text-secondary">{name}</h2>
          {price && (
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-secondary">${price}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          )}
          {description && (
            <div className="text-muted-foreground text-lg leading-relaxed">
              <RichText data={description} enableGutter={false} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
