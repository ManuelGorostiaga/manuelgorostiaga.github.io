export function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenuWrapper = document.getElementById('navMenuWrapper');

    if (!navbar) {
        throw new Error('Navbar element "#navbar" not found in DOM.');
    }
    if (!mobileMenuToggle) {
        throw new Error('Mobile toggle button "#mobileMenuToggle" not found in DOM.');
    }
    if (!navMenuWrapper) {
        throw new Error('Navigation menu wrapper "#navMenuWrapper" not found in DOM.');
    }

    mobileMenuToggle.addEventListener('click', () => {
        const isOpen = navMenuWrapper.classList.toggle('mobile-active');
        mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenuWrapper.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenuWrapper.classList.remove('mobile-active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    initActiveSectionObserver();
}

function initActiveSectionObserver() {
    const sections = document.querySelectorAll('header[id], section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href')?.replace('#', '');
                    if (href === id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0.1
    });

    sections.forEach(section => observer.observe(section));
}
