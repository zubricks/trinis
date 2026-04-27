import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContentMediaBlock } from '@/blocks/ContentMedia/Component'
import { MenuSectionBlock } from '@/blocks/MenuSection/Component'
import { LocationInfoBlock } from '@/blocks/LocationInfo/Component'
import { TestimonialBlock } from '@/blocks/Testimonial/Component'
import { MenuNavBlock } from '@/blocks/MenuNav/Component'
import { FeaturedItemBlock } from '@/blocks/FeaturedItem/Component'
import { DividerBlock } from '@/blocks/Divider/Component'
import { ImageSliderBlock } from '@/blocks/ImageSlider/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  contentMedia: ContentMediaBlock,
  menuSection: MenuSectionBlock,
  locationInfo: LocationInfoBlock,
  testimonial: TestimonialBlock,
  menuNav: MenuNavBlock,
  featuredItem: FeaturedItemBlock,
  divider: DividerBlock,
  imageSlider: ImageSliderBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  const fullBleedBlocks = new Set(['testimonial', 'imageSlider'])
  const noMarginBlocks = new Set(['menuNav', 'divider'])

  // Collect menu section titles for MenuNav
  const menuSectionTitles = blocks
    .filter((block) => block.blockType === 'menuSection')
    .map((block) => (block as any).sectionTitle as string)
    .filter(Boolean)

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              const isFullBleed = fullBleedBlocks.has(blockType)
              const isNoMargin = noMarginBlocks.has(blockType)
              const hasReducedMargin = 'reduceTopMargin' in block && block.reduceTopMargin
              const prevBlock = index > 0 ? blocks[index - 1] : null
              const isAfterNoMargin = prevBlock && noMarginBlocks.has(prevBlock.blockType)

              const marginClass = isFullBleed || isNoMargin
                ? ''
                : hasReducedMargin || isAfterNoMargin
                  ? 'mb-32 lg:mb-40'
                  : 'my-32 lg:my-40'

              const extraProps = blockType === 'menuNav' ? { sections: menuSectionTitles } : {}

              if (isNoMargin) {
                return (
                  // @ts-expect-error there may be some mismatch between the expected types here
                  <Block key={index} {...block} {...extraProps} disableInnerContainer />
                )
              }

              return (
                <div className={marginClass} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} {...extraProps} disableInnerContainer />
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
