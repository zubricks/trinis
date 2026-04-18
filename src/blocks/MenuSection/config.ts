import type { Block } from 'payload'

export const MenuSection: Block = {
  slug: 'menuSection',
  interfaceName: 'MenuSectionBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      label: 'Section Title',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Menu Items',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'price',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. "12.99" or "Market Price"',
          },
        },
        {
          name: 'tags',
          type: 'select',
          hasMany: true,
          options: [
            { label: 'Vegetarian', value: 'vegetarian' },
            { label: 'Gluten-Free', value: 'gluten-free' },
            { label: 'Spicy', value: 'spicy' },
            { label: 'Popular', value: 'popular' },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
  labels: {
    plural: 'Menu Sections',
    singular: 'Menu Section',
  },
}
