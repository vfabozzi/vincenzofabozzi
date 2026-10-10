import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const videos = import.meta.glob < string > ('/src/assets/video/**/*.mp4', {
    eager: true,
    query: '?url',
    import: 'default',
});

async function processImage(src: ImageMetadata) {
    const img = await getImage({
        src,
        widths: [800, 1600],
        sizes: '100vw',
        format: 'webp',
    });
    return {
        src: img.src,
        srcSet: img.srcSet.attribute,
        width: src.width,
        height: src.height,
    };
}

export async function processMedia(media: any[]) {
    return Promise.all(
        media.map(async (m) => {
            if (m.type === 'image') {
                return {
                    type: 'image' as const,
                    alt: m.alt,
                    ...(await processImage(m.src)),
                };
            }

            const url = videos[`/src/assets/video/${m.src}`];
            if (!url) {
                throw new Error(`Video non trovato: src/assets/video/${m.src}`);
            }
            return {
                type: 'video' as const,
                label: m.label,
                src: url,
                poster: await processImage(m.poster),
            };
        })
    );
}