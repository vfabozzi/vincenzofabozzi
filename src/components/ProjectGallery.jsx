import { useEffect } from 'react';
import { useState } from 'react';

export default function ProjectGallery({ media }) {
    const [current, setCurrent] = useState(0);

    if (media.length === 0) return null;

    const image = media[current];
    const hasMany = media.length > 1;

    const next = () => setCurrent((i) => (i + 1) % media.length);

    useEffect(() => {
        const nextItem = media[(current + 1) % media.length];
        if (!nextItem || nextItem.type === 'video') return;

        const img = new Image();
        img.sizes = '100vw';          // stesso valore dell'<img> reale
        img.srcset = nextItem.srcSet;
        img.src = nextItem.src;
    }, [current, media]);

    return (
        <div className="flex flex-col gap-05 pt-05 gallery-control">
            <div className='gallery-mobile'>
                <button
                    onClick={next}
                    disabled={!hasMany}
                    aria-label={hasMany ? 'Immagine successiva' : undefined}
                    style={{ cursor: hasMany ? 'pointer' : 'default' }}
                    className='gallery-frame'
                >
                    <img
                        src={image.src}
                        srcSet={image.srcSet}
                        sizes="100vw"
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className='gallery-img'
                    />
                    {hasMany && (
                        <p className="text-base hidden">
                            {current + 1}/{media.length}
                        </p>
                    )}
                </button>
            </div>
            <div className='gallery-desktop'>
                {media.map((item) => (
                    <img
                        key={item.src}
                        className="gallery-desktop-item"
                        src={item.src}
                        srcSet={item.srcSet}
                        sizes="160px"
                        alt={item.alt}
                        loading="lazy"
                    />
                ))}
            </div>
        </div>
    );
}