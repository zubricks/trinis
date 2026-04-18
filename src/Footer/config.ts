import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { socialLinks } from '@/fields/socialLinks'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
      admin: {
        description: 'Upload a logo image for the site footer',
      },
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',
      maxRows: 4,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Column Heading',
        },
        {
          name: 'contentType',
          type: 'select',
          defaultValue: 'richText',
          options: [
            { label: 'Rich Text', value: 'richText' },
            { label: 'Nav Links', value: 'navLinks' },
          ],
        },
        {
          name: 'richText',
          type: 'richText',
          admin: {
            condition: (_, siblingData) => siblingData?.contentType === 'richText',
          },
        },
        {
          name: 'navItems',
          type: 'array',
          label: 'Links',
          admin: {
            condition: (_, siblingData) => siblingData?.contentType === 'navLinks',
            initCollapsed: true,
          },
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 8,
        },
      ],
    },
    socialLinks,
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
      admin: {
        description: 'e.g. "Downtown Trini\'s & Margarita Joe\'s"',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
