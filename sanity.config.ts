'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schema';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'cmg-painting',
  title: 'CMG Painting and Design CMS',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema,
  basePath: '/studio',
});
