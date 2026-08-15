import type { CollectionConfig } from 'payload';

export const Education: CollectionConfig = {
  slug: 'education',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'institution',
    defaultColumns: ['institution', 'degree_es', 'period'],
  },
  fields: [
    {
      name: 'degree_en',
      type: 'text',
      required: true,
      label: 'Degree (English)',
    },
    {
      name: 'degree_es',
      type: 'text',
      required: true,
      label: 'Degree (Spanish)',
    },
    {
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'period',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
};
