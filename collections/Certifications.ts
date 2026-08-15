import type { CollectionConfig } from 'payload';

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title_es',
    defaultColumns: ['title_es', 'issuer', 'date'],
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
      name: 'issuer',
      type: 'text',
      required: true,
      label: 'Issuer / Organization',
    },
    {
      name: 'date',
      type: 'text',
      required: true,
    },
    {
      name: 'details_en',
      type: 'textarea',
      label: 'Details (English)',
    },
    {
      name: 'details_es',
      type: 'textarea',
      label: 'Details (Spanish)',
    },
    {
      name: 'badge_text',
      type: 'text',
      label: 'Badge Text',
    },
    {
      name: 'credential_url',
      type: 'text',
      label: 'Credential URL',
    },
    {
      name: 'score',
      type: 'text',
      label: 'Score',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
};
