import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ImageSlider: Block = {
  slug: 'imageSlider',
  interfaceName: 'ImageSliderBlock',
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      minRows: 1,
      fields: [
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'overlayOpacity',
          type: 'select',
          defaultValue: 'medium',
          options: [
            { label: 'Light', value: 'light' },
            { label: 'Medium', value: 'medium' },
            { label: 'Dark', value: 'dark' },
          ],
        },
        {
          name: 'richText',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5'] }),
              AlignFeature(),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
          label: 'Slide Content',
        },
      ],
    },
  ],
  labels: {
    plural: 'Image Sliders',
    singular: 'Image Slider',
  },
}
