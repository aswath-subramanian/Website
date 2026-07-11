import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const groundtruth = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ground-truth' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    status: z.string().optional(),
  }),
});

const fmj = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/finding-my-joule' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { groundtruth, fmj };
