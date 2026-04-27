import React from 'react'
import { cn } from '@/utilities/ui'
import { Media as MediaComponent } from '@/components/Media'

import type { MenuSectionBlock as MenuSectionBlockProps } from '@/payload-types'

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const tagColors: Record<string, string> = {
  vegetarian: 'bg-secondary/20 text-secondary',
  'gluten-free': 'bg-accent/20 text-accent-foreground',
  spicy: 'bg-destructive/20 text-destructive',
  popular: 'bg-primary/20 text-primary',
}

const tagLabels: Record<string, string> = {
  vegetarian: 'Vegetarian',
  'gluten-free': 'GF',
  spicy: 'Spicy',
  popular: 'Popular',
}

export const MenuSectionBlock: React.FC<MenuSectionBlockProps> = ({
  sectionTitle,
  sectionDescription,
  items,
}) => {
  return (
    <section id={`menu-${slugify(sectionTitle)}`} className="container py-12 scroll-mt-40">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{sectionTitle}</h2>
        {sectionDescription && (
          <p className="text-muted-foreground max-w-2xl mx-auto">{sectionDescription}</p>
        )}
        <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {items?.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex gap-4 p-4 rounded-lg border border-border bg-card',
              item.image ? 'items-start' : 'items-center',
            )}
          >
            {item.image && (
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <MediaComponent
                  resource={item.image}
                  imgClassName="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <span className="text-primary font-bold whitespace-nowrap">${item.price}</span>
              </div>
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        'text-xs px-2 py-0.5 rounded-full font-medium',
                        tagColors[tag] || 'bg-muted text-muted-foreground',
                      )}
                    >
                      {tagLabels[tag] || tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
