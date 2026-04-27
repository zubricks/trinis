import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const FeaturedItem: Block = {
  slug: 'featuredItem',
  interfaceName: 'FeaturedItemBlock',
  fields: [
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'imageLeft',
      options: [
        { label: 'Image Left', value: 'imageLeft' },
        { label: 'Image Right', value: 'imageRight' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'badges',
      type: 'array',
      label: 'Badges',
      maxRows: 3,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. "NEW!", "SPICY", "FAN FAVORITE"',
          },
        },
      ],
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Item Name',
    },
    {
      name: 'price',
      type: 'text',
      admin: {
        description: 'e.g. "12.99" or "Market Price"',
      },
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          AlignFeature(),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
  ],
  labels: {
    plural: 'Featured Items',
    singular: 'Featured Item',
  },
}
