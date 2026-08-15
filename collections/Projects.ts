import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title_es',
    defaultColumns: ['title_es', 'category', 'period', 'order'],
  },
  fields: [
    {
      name: 'title_en',
      type: 'text',
      required: true,
      label: 'Title (English)',
    },
    {
      name: 'title_es',
      type: 'text',
      required: true,
      label: 'Title (Spanish)',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly name, e.g. "rental-cars"',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Full Stack', value: 'fullstack' },
        { label: 'Mobile', value: 'mobile' },
        { label: 'AI', value: 'ai' },
        { label: 'QA', value: 'qa' },
      ],
    },
    {
      name: 'period',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "2025"' },
    },
    {
      name: 'type_en',
      type: 'text',
      label: 'Type (English)',
      admin: { description: 'e.g. "Full Stack Project"' },
    },
    {
      name: 'type_es',
      type: 'text',
      label: 'Type (Spanish)',
      admin: { description: 'e.g. "Proyecto Full Stack"' },
    },
    {
      name: 'description_en',
      type: 'textarea',
      required: true,
      label: 'Short Description (English)',
    },
    {
      name: 'description_es',
      type: 'textarea',
      required: true,
      label: 'Short Description (Spanish)',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'Thumbnail (hover preview)',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Project Gallery',
      admin: {
        description: 'Add multiple screenshots with captions',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption_en',
          type: 'text',
          label: 'Caption (English)',
        },
        {
          name: 'caption_es',
          type: 'text',
          label: 'Caption (Spanish)',
        },
      ],
    },
    {
      name: 'video_url',
      type: 'text',
      label: 'Video Demo URL',
      admin: {
        description: 'YouTube or Loom URL for the project walkthrough',
      },
    },
    {
      name: 'technologies',
      type: 'json',
      label: 'Technologies',
      admin: {
        description: 'JSON array of tech names, e.g. ["Next.js", "React", "PostgreSQL"]',
      },
    },
    {
      name: 'highlights_en',
      type: 'json',
      label: 'Highlights (English)',
      admin: {
        description: 'JSON array of highlight strings',
      },
    },
    {
      name: 'highlights_es',
      type: 'json',
      label: 'Highlights (Spanish)',
      admin: {
        description: 'JSON array of highlight strings',
      },
    },
    {
      name: 'github_url',
      type: 'text',
      label: 'GitHub URL',
    },
    {
      name: 'live_url',
      type: 'text',
      label: 'Live URL',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower = first)',
      },
    },
  ],
};
