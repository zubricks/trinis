import type { Block } from 'payload'

export const Testimonial: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialBlock',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Quote Text',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'primary',
      options: [
        { label: 'Default (Cream)', value: 'default' },
        { label: 'Primary (Teal)', value: 'primary' },
        { label: 'Secondary (Orange)', value: 'secondary' },
      ],
    },
  ],
  labels: {
    plural: 'Quotes',
    singular: 'Quote',
  },
}
