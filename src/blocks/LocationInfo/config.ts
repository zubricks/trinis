import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const LocationInfo: Block = {
  slug: 'locationInfo',
  interfaceName: 'LocationInfoBlock',
  fields: [
    {
      name: 'address',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'hours',
      type: 'array',
      label: 'Business Hours',
      minRows: 1,
      fields: [
        {
          name: 'days',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. "Tue - Thu"',
          },
        },
        {
          name: 'time',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. "11am - 9pm" or "Closed"',
          },
        },
      ],
    },
    {
      name: 'mapEmbedUrl',
      type: 'text',
      label: 'Google Maps Embed URL',
      admin: {
        description: 'Paste a Google Maps embed URL to show an interactive map',
      },
    },
    {
      name: 'additionalInfo',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      label: 'Additional Information',
    },
  ],
  labels: {
    plural: 'Location Info Blocks',
    singular: 'Location Info',
  },
}
