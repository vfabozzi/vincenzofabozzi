import { useState, useEffect } from 'react';

function MediaItem({ item, priority }) {
    if (item.type === 'video') {
        return (
            <video
                className="gallery-img"
                src={item.src}
                poster={item.poster.src}
                aria-label={item.label}
                autoPlay
                loop
                muted
                playsInline
                preload={priority ? 'auto' : 'metadata'}
                ref={(el) => {
                    if (el) el.muted = true;
                }}
            />
        );
    }

    return (
        <img
            className="gallery-img"
            src={item.src}
            srcSet={item.srcSet}
            sizes="100vw"
            alt={item.alt}
            width={item.width}
            height={item.height}
        />
    );
}

function MediaThumb({ item, priority }) {
    // il video in miniatura mostra il poster, un'immagine ottimizzata
    const isVideo = item.type === 'video';
    const img = isVideo ? item.poster : item;
    if (item.type === 'video') {
        return (
            <video
                className="gallery-desktop-item"
                src={item.src}
                poster={item.poster.src}
                aria-label={item.label}
                autoPlay
                loop
                muted
                playsInline
                preload={priority ? 'auto' : 'metadata'}
                ref={(el) => {
                    if (el) el.muted = true;
                }}
            />
        );
    }
    return (
        <img
            className="gallery-desktop-item"
            src={img.src}
            srcSet={img.srcSet}
            sizes="160px"
            alt={isVideo ? item.label : item.alt}
            loading="lazy"
        />
    );
}

export default function ProjectGallery({ media }) {
    const [current, setCurrent] = useState(0);

    const total = media.length;
    const hasMany = total > 1;

    useEffect(() => {
        if (!hasMany) return;

        const nextItem = media[(current + 1) % total];
        // per un video si precarica il poster, per un'immagine l'immagine stessa
        const target = nextItem.type === 'video' ? nextItem.poster : nextItem;

        const img = new Image();
        img.sizes = '100vw'; // stesso valore dell'<img> reale
        img.srcset = target.srcSet;
        img.src = target.src;
    }, [current, media, hasMany, total]);

    if (total === 0) return null;

    const next = () => setCurrent((i) => (i + 1) % total);
    const item = media[current];

    return (
        <div className="flex flex-col gap-05 pt-05 gallery-control">
            <div className="gallery-mobile">
                <button
                    onClick={next}
                    disabled={!hasMany}
                    aria-label={hasMany ? 'Elemento successivo' : undefined}
                    style={{ cursor: hasMany ? 'pointer' : 'default' }}
                    className="gallery-frame"
                >
                    <MediaItem key={item.src} item={item} priority={current === 0} />
                    {hasMany && (
                        <p className="text-base hidden">
                            {current + 1}/{total}
                        </p>
                    )}
                </button>
            </div>
            <div className="gallery-desktop gap-05">
                {media.map((m) => (
                    <MediaThumb key={m.src} item={m} />
                ))}
            </div>
        </div>
    );
}