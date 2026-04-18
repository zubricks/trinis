import React from 'react'
import { Media } from '@/components/Media'

import type { ImageGalleryBlock as ImageGalleryBlockProps } from '@/payload-types'

export const ImageGalleryBlock: React.FC<ImageGalleryBlockProps> = ({ heading, images }) => {
  return (
    <section className="container py-12">
      {heading && (
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{heading}</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images?.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
            <Media
              resource={item.image}
              imgClassName="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {item.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm">{item.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
