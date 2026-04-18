import React from 'react'
import { cn } from '@/utilities/ui'

import type { ContentMediaBlock as ContentMediaBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const ContentMediaBlock: React.FC<ContentMediaBlockProps> = (props) => {
  const { alignment, enableLink, link, media, richText } = props

  const isContentFirst = alignment === 'contentMedia'

  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div
          className={cn(
            'lg:col-span-6',
            isContentFirst ? '' : 'order-1 lg:order-2',
          )}
        >
          {richText && <RichText data={richText} enableGutter={false} />}
          {enableLink && link && (
            <div className="mt-8">
              <CMSLink {...link} />
            </div>
          )}
        </div>
        <div
          className={cn(
            'lg:col-span-6',
            isContentFirst ? '' : 'order-2 lg:order-1',
          )}
        >
          {media && typeof media === 'object' && (
            <Media
              resource={media}
              imgClassName="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  )
}
