document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // GSAP Animations
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);

        // Background image animation
        const backgroundImage = document.querySelector('.background-image');
        gsap.to(backgroundImage, {
            scale: 1.1,
            duration: 20,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });

        // Gradient overlay animation
        const gradientOverlay = document.querySelector('.gradient-overlay');
        gsap.to(gradientOverlay, {
            opacity: 0.7,
            duration: 10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });

        // Hero section animations
        gsap.to('.hero h1', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
        gsap.to('.hero p', { opacity: 1, y: 0, duration: 1, delay: 0.8 });
        gsap.to('.cta-button', { opacity: 1, y: 0, duration: 1, delay: 1.1 });

        // Animate sections on scroll
        gsap.utils.toArray('section').forEach(section => {
            const sectionTitle = section.querySelector('h2');
            if (sectionTitle) {
                gsap.from(sectionTitle, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1
                });
            }
        });

        // Animate product cards
        gsap.utils.toArray('.product-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
            });
        });

        // Animate recipe cards
        gsap.utils.toArray('.recipe-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                },
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
            });
        });    
    } else {
        console.warn('GSAP or ScrollTrigger not loaded. Animations will not work.');
    }

    // Form submission (you can replace this with actual form submission logic)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});
