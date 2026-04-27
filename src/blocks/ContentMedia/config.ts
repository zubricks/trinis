import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const ContentMedia: Block = {
  slug: 'contentMedia',
  interfaceName: 'ContentMediaBlock',
  fields: [
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'contentMedia',
      options: [
        {
          label: 'Content + Media',
          value: 'contentMedia',
        },
        {
          label: 'Media + Content',
          value: 'mediaContent',
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5'] }),
            AlignFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Content',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'enableLink',
      type: 'checkbox',
      label: 'Enable Call to Action',
    },
    link({
      overrides: {
        admin: {
          condition: (_data, siblingData) => {
            return Boolean(siblingData?.enableLink)
          },
        },
      },
    }),
  ],
  labels: {
    plural: 'Content + Media',
    singular: 'Content + Media',
  },
}
