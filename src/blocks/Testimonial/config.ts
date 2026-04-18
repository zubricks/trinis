import type { Block } from 'payload'

export const Testimonial: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialBlock',
  fields: [
    {
      name: 'quotes',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'source',
          type: 'select',
          options: [
            { label: 'Google', value: 'google' },
            { label: 'Yelp', value: 'yelp' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Other', value: 'other' },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Testimonials',
    singular: 'Testimonial',
  },
}
