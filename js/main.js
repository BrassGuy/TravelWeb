document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    // Open mobile navigation
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close mobile navigation
    mobileNavClose.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close mobile navigation when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile navigation when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        const formData = new FormData(contactForm);
        alert('Thank you for your enquiry! We will get back to you soon.');
        contactForm.reset();
    });

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the newsletter subscription to your backend
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Destination card hover effect
    document.querySelectorAll('.destination-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 
