import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
    schema: ({ image }) =>
        z.object({
            order: z.number(),
            published: z.boolean().default(false),
            title: z.union([z.string(), z.array(z.string())]),
            category: z.string(),
            year: z.number(),
            externalURL: z.string().url().optional(),
            media: z
                .array(z.object({ src: image(), alt: z.string() }))
                .default([]),
        }),
});

export const collections = { projects };