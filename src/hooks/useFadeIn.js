import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function useFadeIn(dependencies = []) {
    const scope = useRef(null);

    useGSAP(
        () => {
            const targets = scope.current.querySelectorAll(
                '[data-fadein]:not([data-fadein-done])'
            );
            if (!targets.length) return;

            const mm = gsap.matchMedia();
            mm.add('(prefers-reduced-motion: no-preference)', () => {
                gsap.to(
                    targets,
                    {
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.3,
                        ease: 'power2.out',
                        onComplete: () =>
                            targets.forEach((el) =>
                                el.setAttribute('data-fadein-done', '')
                            ),
                    }
                );
            });
        },
        { scope, dependencies } // niente revertOnUpdate
    );

    return scope;
}