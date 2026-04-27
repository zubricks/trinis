'use client'

import React, { useState, useCallback } from 'react'
import { cn } from '@/utilities/ui'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import RichText from '@/components/RichText'

import type { ImageSliderBlock as ImageSliderBlockProps, Media } from '@/payload-types'

const overlayClasses: Record<string, string> = {
  light: 'bg-black/30',
  medium: 'bg-black/50',
  dark: 'bg-black/70',
}

export const ImageSliderBlock: React.FC<ImageSliderBlockProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0)

  const total = slides?.length || 0

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1))
  }, [total])

  const next = useCallback(() => {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1))
  }, [total])

  if (!slides || slides.length === 0) return null

  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden">
      {slides.map((slide, index) => {
        const image = slide.backgroundImage as Media | undefined
        const imageUrl = image?.url

        return (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0',
            )}
          >
            {imageUrl && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            )}
            <div className={cn('absolute inset-0', overlayClasses[slide.overlayOpacity || 'medium'])} />
            <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-8">
              <div className="max-w-4xl w-full text-center text-white [&_h1]:!text-secondary [&_h2]:!text-secondary [&_h3]:!text-secondary [&_h4]:!text-secondary">
                {slide.richText && (
                  <RichText
                    data={slide.richText}
                    enableGutter={false}
                  />
                )}
              </div>
            </div>
          </div>
        )
      })}

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:text-secondary transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:text-secondary transition-colors"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-colors',
                  index === current ? 'bg-white' : 'bg-white/40',
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
