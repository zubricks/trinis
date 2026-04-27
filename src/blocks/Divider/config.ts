import type { Block } from 'payload'

export const Divider: Block = {
  slug: 'divider',
  interfaceName: 'DividerBlock',
  fields: [
    {
      name: 'style',
      type: 'select',
      defaultValue: 'line',
      options: [
        { label: 'Line', value: 'line' },
        { label: 'Checkerboard', value: 'checkerboard' },
        { label: 'Color Band', value: 'colorBand' },
      ],
    },
    {
      name: 'color',
      type: 'select',
      defaultValue: 'primary',
      options: [
        { label: 'Primary (Teal)', value: 'primary' },
        { label: 'Secondary (Orange)', value: 'secondary' },
        { label: 'Accent (Gold)', value: 'accent' },
      ],
    },
  ],
  labels: {
    plural: 'Dividers',
    singular: 'Divider',
  },
}
