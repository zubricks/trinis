import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      admin: {
        condition: (_, { type } = {}) => type === 'highImpact',
        description: 'Optional solid background color (used when no media is set)',
      },
      options: [
        { label: 'None', value: 'none' },
        { label: 'Primary (Teal)', value: 'primary' },
        { label: 'Secondary (Orange)', value: 'secondary' },
        { label: 'Cream', value: 'cream' },
        { label: 'Gold', value: 'gold' },
      ],
    },
    {
      name: 'marqueeText',
      type: 'text',
      label: 'Vertical Marquee Text',
      admin: {
        condition: (_, { type } = {}) => type === 'highImpact',
        description: 'Scrolling vertical text on the side of the hero (e.g. "TACOS MUY CALIENTE")',
      },
    },
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
    },
  ],
  label: false,
}
