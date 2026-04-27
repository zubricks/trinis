import type { Block } from 'payload'

export const StatsBar: Block = {
  slug: 'statsBar',
  interfaceName: 'StatsBarBlock',
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'primary',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Primary (Teal)', value: 'primary' },
        { label: 'Secondary (Orange)', value: 'secondary' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. "30+", "100%", "#1"',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. "Years Serving Sparta"',
          },
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Star', value: 'star' },
            { label: 'Fire', value: 'fire' },
            { label: 'Trophy', value: 'trophy' },
            { label: 'Heart', value: 'heart' },
            { label: 'Utensils', value: 'utensils' },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Stats Bars',
    singular: 'Stats Bar',
  },
}
