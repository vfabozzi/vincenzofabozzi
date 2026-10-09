import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { fadeIn } from '../lib/FadeIn';

gsap.registerPlugin(useGSAP);

export function useFadeIn(dependencies = []) {
    const scope = useRef(null);

    useGSAP(
        () => {
            fadeIn('[data-fadein]');
        },
        { scope, dependencies, revertOnUpdate: true }
    );

    return scope;
}