import gsap from 'gsap';

export function fadeIn(targets) {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
            targets,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, delay: 0.3, ease: 'power2.out' }
        );
    });
    return mm;
}