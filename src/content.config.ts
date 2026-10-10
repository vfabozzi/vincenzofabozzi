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
                .array(
                    z.discriminatedUnion('type', [
                        z.object({
                            type: z.literal('image'),
                            src: image(),
                            alt: z.string(),
                        }),
                        z.object({
                            type: z.literal('video'),
                            src: z.string(), // percorso relativo a src/assets/video/
                            poster: image(),
                            label: z.string(), // descrizione per screen reader
                        }),
                    ])
                )
                .default([]),
        }),
});

export const collections = { projects };