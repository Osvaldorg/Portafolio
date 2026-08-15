import type { CollectionConfig } from 'payload';

export const Experience: CollectionConfig = {
  slug: 'experience',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'company',
    defaultColumns: ['company', 'role_es', 'period', 'order'],
  },
  fields: [
    {
      name: 'role_en',
      type: 'text',
      required: true,
      label: 'Role (English)',
    },
    {
      name: 'role_es',
      type: 'text',
      required: true,
      label: 'Role (Spanish)',
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'type_en',
      type: 'text',
      label: 'Type (English)',
      admin: { description: 'e.g. "Professional Internship"' },
    },
    {
      name: 'type_es',
      type: 'text',
      label: 'Type (Spanish)',
      admin: { description: 'e.g. "Práctica Profesional"' },
    },
    {
      name: 'period',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "Jan 2026 – Apr 2026"' },
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Full Stack', value: 'fullstack' },
        { label: 'Mobile', value: 'mobile' },
        { label: 'QA', value: 'qa' },
      ],
    },
    {
      name: 'tech_stack',
      type: 'json',
      label: 'Tech Stack',
      admin: {
        description: 'JSON array, e.g. ["React Native", "Node.js"]',
      },
    },
    {
      name: 'bullets_en',
      type: 'json',
      label: 'Responsibilities (English)',
      admin: {
        description: 'JSON array of bullet point strings',
      },
    },
    {
      name: 'bullets_es',
      type: 'json',
      label: 'Responsibilities (Spanish)',
      admin: {
        description: 'JSON array of bullet point strings',
      },
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
