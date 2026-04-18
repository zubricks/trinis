import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="relative flex items-center justify-center text-white min-h-[30vh]">
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="min-h-[30vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
      <div className="container z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] text-center">
          {richText && (
            <RichText
              className="mb-6 [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:lg:text-6xl [&_h1]:font-bold [&_h1]:leading-tight"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex justify-center gap-4">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
