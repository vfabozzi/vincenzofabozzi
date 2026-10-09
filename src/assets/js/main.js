import gsap from "gsap";

export default function Selector() {
    const links = document.querySelectorAll('.nav-selector');
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

    links.forEach(link => {
        const linkPath = new URL(link.href, window.location.href).pathname.replace(/\/+$/, '') || '/';
        const isCurrentPage = linkPath === currentPath;

        link.classList.toggle('active', isCurrentPage);

        if (isCurrentPage) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}