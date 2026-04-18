import type { Field } from 'payload'

export const socialLinks: Field = {
  name: 'socialLinks',
  type: 'group',
  label: 'Social Media Links',
  fields: [
    {
      name: 'facebook',
      type: 'text',
      label: 'Facebook URL',
      admin: { placeholder: 'https://facebook.com/...' },
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram URL',
      admin: { placeholder: 'https://instagram.com/...' },
    },
    {
      name: 'x',
      type: 'text',
      label: 'X (Twitter) URL',
      admin: { placeholder: 'https://x.com/...' },
    },
    {
      name: 'yelp',
      type: 'text',
      label: 'Yelp URL',
      admin: { placeholder: 'https://yelp.com/...' },
    },
  ],
}
