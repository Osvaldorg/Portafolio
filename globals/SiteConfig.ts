import type { GlobalConfig } from 'payload';

export const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  label: 'Site Configuration',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Personal info, bio, and skills displayed across the portfolio',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'Osvaldo Ashley Ramos Guzmán',
    },
    {
      name: 'title_en',
      type: 'text',
      label: 'Professional Title (English)',
      defaultValue: 'Software Engineer — Full Stack, Mobile & QA',
    },
    {
      name: 'title_es',
      type: 'text',
      label: 'Professional Title (Spanish)',
      defaultValue: 'Ingeniero de Software — Full Stack, Móvil y QA',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'ramososvaldo487@gmail.com',
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '+52 449 192 2621',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Aguascalientes, México',
    },
    {
      name: 'github_url',
      type: 'text',
      defaultValue: 'https://github.com/Osvaldorg',
    },
    {
      name: 'linkedin_url',
      type: 'text',
      defaultValue: 'https://linkedin.com/in/osvaldo-ramos-guzman',
    },
    {
      name: 'bio_en',
      type: 'textarea',
      label: 'Bio (English)',
    },
    {
      name: 'bio_es',
      type: 'textarea',
      label: 'Bio (Spanish)',
    },
    {
      name: 'skills',
      type: 'json',
      label: 'Skills Ticker',
      admin: {
        description: 'JSON array of skill names for the horizontal ticker, e.g. ["TypeScript", "React", ...]',
      },
    },
    {
      name: 'keywords_en',
      type: 'json',
      label: 'Bio Keywords (English)',
      admin: {
        description: 'JSON array of words/phrases from your English bio to highlight, e.g. ["full stack", "React Native", "20+ bugs"]',
      },
    },
    {
      name: 'keywords_es',
      type: 'json',
      label: 'Bio Keywords (Spanish)',
      admin: {
        description: 'JSON array of words/phrases from your Spanish bio to highlight, e.g. ["full stack", "React Native", "+20 bugs"]',
      },
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats Row',
      admin: {
        description: 'Key metrics shown below the About section. Up to 4 recommended.',
      },
      maxRows: 6,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'The number or value, e.g. "1+", "+20", "B2"' },
        },
        {
          name: 'label_en',
          type: 'text',
          required: true,
          admin: { description: 'English label, e.g. "Years Exp."' },
        },
        {
          name: 'label_es',
          type: 'text',
          required: true,
          admin: { description: 'Spanish label, e.g. "Años Exp."' },
        },
      ],
    },
  ],
};
