import type { Block } from 'payload'

import { link } from '@/fields/link'

export const ParallaxHero: Block = {
  slug: 'parallaxHero',
  interfaceName: 'ParallaxHeroBlock',
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
    },
    link({
      appearances: ['default', 'outline'],
      overrides: {
        name: 'link',
        admin: {
          description: 'Optional call-to-action button',
        },
      },
    }),
    {
      name: 'overlayOpacity',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Medium', value: 'medium' },
        { label: 'Dark', value: 'dark' },
      ],
    },
  ],
  labels: {
    plural: 'Parallax Heroes',
    singular: 'Parallax Hero',
  },
}
