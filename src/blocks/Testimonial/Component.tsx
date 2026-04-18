import React from 'react'

import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'

const sourceLabels: Record<string, string> = {
  google: 'Google',
  yelp: 'Yelp',
  facebook: 'Facebook',
  other: '',
}

export const TestimonialBlock: React.FC<TestimonialBlockProps> = ({ quotes }) => {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {quotes?.map((quote, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border shadow-sm"
            >
              <div className="text-primary text-4xl font-heading mb-4">&ldquo;</div>
              <blockquote className="text-foreground mb-6 italic leading-relaxed">
                {quote.text}
              </blockquote>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{quote.author}</span>
                {quote.source && sourceLabels[quote.source] && (
                  <span className="text-sm text-muted-foreground">
                    &mdash; {sourceLabels[quote.source]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
