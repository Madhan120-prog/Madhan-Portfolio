import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every .md / .mdx file in src/content/blog becomes a post.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    emoji: z.string().default('📝'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
