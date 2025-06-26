// Agent DiY Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('show');
                }
            }
        });
    });

    // Section reveal animation on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // Animate feature icons on scroll
    const featureIcons = document.querySelectorAll('.icon-item');
    const iconObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });

    featureIcons.forEach(icon => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        icon.style.transition = 'all 0.6s ease';
        iconObserver.observe(icon);
    });

    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Feature card animations
    const featureCards = document.querySelectorAll('.feature-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.3 });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease';
        cardObserver.observe(card);
    });

    // Testimonial card rotation effect
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    function rotateTestimonials() {
        testimonialCards.forEach((card, index) => {
            if (index === currentTestimonial) {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            } else {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    }

    // Rotate testimonials every 4 seconds
    if (testimonialCards.length > 0) {
        setInterval(rotateTestimonials, 4000);
    }

    // CTA button click handlers
    const ctaButtons = document.querySelectorAll('.cta-button, button[class*="bg-brand-teal"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // You can add actual form submission or modal opening logic here
            console.log('CTA button clicked - implement actual functionality');
            
            // Example: show alert for demo purposes
            alert('Thanks for your interest! This is a demo - in production, this would open a signup form.');
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('backdrop-blur-md', 'bg-white/90');
                navbar.classList.remove('bg-white');
            } else {
                navbar.classList.remove('backdrop-blur-md', 'bg-white/90');
                navbar.classList.add('bg-white');
            }
        });
    }

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Intersection Observer for counting animation (if you want to add stats)
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            element.textContent = Math.floor(start);
            
            if (start < target) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Add sparkle effect to buttons on hover
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.backgroundColor = '#14B8A6';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 0.8s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }

    // Add sparkle CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 0;
                transform: scale(0) translateY(0);
            }
            50% {
                opacity: 1;
                transform: scale(1) translateY(-10px);
            }
            100% {
                opacity: 0;
                transform: scale(0) translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);

    // Add sparkle effect to main CTA button
    const mainCTA = document.querySelector('.cta-button');
    if (mainCTA) {
        mainCTA.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const x = rect.left + Math.random() * rect.width;
                    const y = rect.top + Math.random() * rect.height;
                    createSparkle(x, y);
                }, i * 100);
            }
        });
    }

    // Performance optimization: throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(() => {
        // Any scroll-based animations can be optimized here
    }, 16));

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
        }
    });

    // Form validation (for when you add contact forms)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add loading states for buttons
    function addLoadingState(button, text = 'Loading...') {
        const originalText = button.textContent;
        button.textContent = text;
        button.disabled = true;
        
        return function removeLoadingState() {
            button.textContent = originalText;
            button.disabled = false;
        };
    }

    console.log('Agent DiY website loaded successfully!');
});
