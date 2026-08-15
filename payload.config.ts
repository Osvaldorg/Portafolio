import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Projects } from './collections/Projects';
import { Experience } from './collections/Experience';
import { Education } from './collections/Education';
import { Certifications } from './collections/Certifications';
import { SiteConfig } from './globals/SiteConfig';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — Osvaldo Ramos Portfolio Admin',
    },
  },
  collections: [Users, Media, Projects, Experience, Education, Certifications],
  globals: [SiteConfig],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'CHANGE-THIS-SECRET-IN-PRODUCTION',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  sharp,
});
