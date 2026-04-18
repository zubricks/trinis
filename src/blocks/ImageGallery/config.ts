import type { Block } from 'payload'

export const ImageGallery: Block = {
  slug: 'imageGallery',
  interfaceName: 'ImageGalleryBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Gallery Images',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
  labels: {
    plural: 'Image Galleries',
    singular: 'Image Gallery',
  },
}
