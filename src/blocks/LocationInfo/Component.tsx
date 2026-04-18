import React from 'react'
import RichText from '@/components/RichText'

import type { LocationInfoBlock as LocationInfoBlockProps } from '@/payload-types'

export const LocationInfoBlock: React.FC<LocationInfoBlockProps> = ({
  address,
  phone,
  hours,
  mapEmbedUrl,
  additionalInfo,
}) => {
  return (
    <section className="container py-12">
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Address
            </h3>
            <p className="text-foreground text-lg">{address}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Phone
            </h3>
            <a
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              className="text-foreground text-lg hover:text-primary transition-colors"
            >
              {phone}
            </a>
          </div>

          {hours && hours.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                Hours
              </h3>
              <div className="space-y-1">
                {hours.map((entry, index) => (
                  <div key={index} className="flex justify-between max-w-xs">
                    <span className="text-foreground font-medium">{entry.days}</span>
                    <span className="text-muted-foreground">{entry.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {additionalInfo && (
            <div className="pt-2">
              <RichText data={additionalInfo} enableGutter={false} />
            </div>
          )}
        </div>

        {mapEmbedUrl && (
          <div className="rounded-lg overflow-hidden border border-border min-h-[300px]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location map"
            />
          </div>
        )}
      </div>
    </section>
  )
}
