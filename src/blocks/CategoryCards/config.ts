import type { Block } from 'payload'

import { link } from '@/fields/link'

export const CategoryCards: Block = {
  slug: 'categoryCards',
  interfaceName: 'CategoryCardsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Category Cards',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        link({
          appearances: false,
          overrides: {
            admin: {
              description: 'Optional link — e.g. to a menu section anchor',
            },
          },
        }),
      ],
    },
  ],
  labels: {
    plural: 'Category Cards',
    singular: 'Category Cards',
  },
}
