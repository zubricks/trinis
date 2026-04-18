import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContentMediaBlock } from '@/blocks/ContentMedia/Component'
import { ParallaxHeroBlock } from '@/blocks/ParallaxHero/Component'
import { MenuSectionBlock } from '@/blocks/MenuSection/Component'
import { LocationInfoBlock } from '@/blocks/LocationInfo/Component'
import { TestimonialBlock } from '@/blocks/Testimonial/Component'
import { ImageGalleryBlock } from '@/blocks/ImageGallery/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  contentMedia: ContentMediaBlock,
  parallaxHero: ParallaxHeroBlock,
  menuSection: MenuSectionBlock,
  locationInfo: LocationInfoBlock,
  testimonial: TestimonialBlock,
  imageGallery: ImageGalleryBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  const fullBleedBlocks = new Set(['parallaxHero', 'testimonial'])

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              const isFullBleed = fullBleedBlocks.has(blockType)

              return (
                <div className={isFullBleed ? '' : 'my-32 lg:my-40'} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
