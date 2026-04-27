import React from 'react'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

import type { CategoryCardsBlock as CategoryCardsBlockProps } from '@/payload-types'

export const CategoryCardsBlock: React.FC<CategoryCardsBlockProps> = ({ heading, cards }) => {
  return (
    <section className="container">
      {heading && (
        <h2 className="text-center text-4xl md:text-5xl mb-12">{heading}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards?.map((card, index) => {
          const inner = (
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                {card.image && typeof card.image === 'object' && (
                  <Media
                    resource={card.image}
                    imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <h3 className="text-center text-2xl md:text-3xl">{card.title}</h3>
            </div>
          )

          if (card.link?.url || card.link?.reference) {
            return (
              <CMSLink key={index} {...card.link} appearance="link" className="no-underline hover:no-underline text-foreground">
                {inner}
              </CMSLink>
            )
          }

          return <div key={index}>{inner}</div>
        })}
      </div>
    </section>
  )
}
