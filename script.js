document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // 1. COUNTDOWN TIMERS (Multiple Locations)
    // ========================================

    function updateCountdown() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setHours(24, 0, 0, 0);
        const diff = tomorrow - now;

        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Top bar countdown
        const countdownTop = document.getElementById('countdown-top');
        if (countdownTop) {
            countdownTop.innerHTML = `⏰ ${hours}h ${minutes}m ${seconds}s`;
        }

        // Main hero countdown
        const hoursMain = document.getElementById('hours-main');
        const minutesMain = document.getElementById('minutes-main');
        const secondsMain = document.getElementById('seconds-main');

        if (hoursMain) hoursMain.textContent = String(hours).padStart(2, '0');
        if (minutesMain) minutesMain.textContent = String(minutes).padStart(2, '0');
        if (secondsMain) secondsMain.textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ========================================
    // 2. SLOTS FOMO LOGIC (Reducing Numbers)
    // ========================================

    const slotsElement = document.getElementById('slots');
    let currentSlots = 5;

    setTimeout(() => {
        if (slotsElement && currentSlots > 2) {
            currentSlots--;
            slotsElement.textContent = currentSlots;
            slotsElement.style.animation = 'pulse 1s';
        }
    }, 10000); // After 10 seconds

    setTimeout(() => {
        if (slotsElement && currentSlots > 2) {
            currentSlots--;
            slotsElement.textContent = currentSlots;
            slotsElement.style.color = '#ff006e';
            slotsElement.style.animation = 'pulse 0.8s';
        }
    }, 25000); // After 25 seconds

    setTimeout(() => {
        if (slotsElement && currentSlots > 2) {
            currentSlots--;
            slotsElement.textContent = currentSlots;
            slotsElement.style.color = '#ff006e';
            slotsElement.parentElement.style.fontWeight = '800';
        }
    }, 45000); // After 45 seconds

    // ========================================
    // 3. FOMO NOTIFICATIONS POPUP
    // ========================================

    const fomoNotifications = [
        { name: 'Carlos R.', message: 'acaba de contratar el Plan Pro hace 5 min', city: 'Medellín' },
        { name: 'María P.', message: 'se registró para una demo hace 8 min', city: 'Bogotá' },
        { name: 'Julián M.', message: 'contrató el Plan Elite hace 12 min', city: 'Cali' },
        { name: 'Laura V.', message: 'solicitó información del Plan Basic hace 15 min', city: 'Barranquilla' },
        { name: 'Diego F.', message: 'agendó una demo hace 18 min', city: 'Cartagena' },
        { name: 'Valentina S.', message: 'contrató el Plan Pro hace 22 min', city: 'Medellín' },
        { name: 'Andrés G.', message: 'se unió al Plan Elite hace 25 min', city: 'Bogotá' },
        { name: 'Sandra R.', message: 'solicitó una demo hace 30 min', city: 'Bucaramanga' }
    ];

    let notificationIndex = 0;

    function showFomoNotification() {
        const fomoPopup = document.getElementById('fomo-popup');
        const fomoName = document.getElementById('fomo-name');
        const fomoMessage = document.getElementById('fomo-message');

        if (fomoPopup && fomoName && fomoMessage) {
            const notification = fomoNotifications[notificationIndex];
            fomoName.textContent = notification.name + ' de ' + notification.city;
            fomoMessage.textContent = notification.message;

            fomoPopup.classList.add('show');

            setTimeout(() => {
                fomoPopup.classList.remove('show');
            }, 5000);

            notificationIndex = (notificationIndex + 1) % fomoNotifications.length;
        }
    }

    // Show first notification after 8 seconds
    setTimeout(showFomoNotification, 8000);

    // Then show notifications every 25 seconds
    setInterval(showFomoNotification, 25000);

    // Close button for FOMO notification
    const fomoClose = document.querySelector('.fomo-close');
    if (fomoClose) {
        fomoClose.addEventListener('click', () => {
            document.getElementById('fomo-popup').classList.remove('show');
        });
    }

    // ========================================
    // 4. MOBILE MENU TOGGLE
    // ========================================

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';

            if (isVisible) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(5, 5, 7, 0.98)';
                navLinks.style.padding = '30px';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
                navLinks.style.zIndex = '999';
                navLinks.style.backdropFilter = 'blur(20px)';
            }
        });
    }

    // ========================================
    // 5. SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or empty
            if (href === '#' || href === '#demo') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 968 && navLinks) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // ========================================
    // 6. SCROLL REVEAL ANIMATIONS
    // ========================================

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ========================================
    // 7. FAQ ACCORDION
    // ========================================

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = null;
                        }
                    }
                });

                // Toggle current FAQ
                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

    // ========================================
    // 8. NUMBER COUNTER ANIMATION (Hero Stats)
    // ========================================

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    // ========================================
    // 9. FORM VALIDATION & SUBMISSION
    // ========================================

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // Basic validation (HTML5 handles most of it)
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;

            // Phone validation
            if (phone && phone.length < 10) {
                e.preventDefault();
                alert('Por favor ingresa un número de teléfono válido');
                return false;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailPattern.test(email)) {
                e.preventDefault();
                alert('Por favor ingresa un email válido');
                return false;
            }

            // If validation passes, form will submit normally to formsubmit.co
        });
    }

    // ========================================
    // 10. PRICING CARD HOVER EFFECTS (Optional Enhancement)
    // ========================================

    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add extra glow effect on hover
            card.style.boxShadow = '0 10px 40px rgba(0, 242, 255, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            // Remove extra glow
            card.style.boxShadow = '';
        });
    });

    // ========================================
    // 11. LAZY LOAD OPTIMIZATION (Performance)
    // ========================================

    // Add loading="lazy" to images if not already present
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // ========================================
    // 12. SCROLL TO TOP ON PAGE LOAD
    // ========================================

    window.scrollTo({ top: 0, behavior: 'instant' });

    // ========================================
    // 13. TRACK TIME ON PAGE (Optional Analytics)
    // ========================================

    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage++;

        // Show more aggressive FOMO after 2 minutes
        if (timeOnPage === 120) {
            if (slotsElement) {
                slotsElement.textContent = '2';
                slotsElement.style.color = '#ff006e';
                slotsElement.style.animation = 'pulse 0.5s infinite';
            }
        }
    }, 1000);

    // ========================================
    // 14. EXIT INTENT POPUP (Advanced FOMO)
    // ========================================

    let exitIntentShown = false;

    document.addEventListener('mouseleave', (e) => {
        // Only trigger if mouse leaves from the top of the page
        if (e.clientY <= 0 && !exitIntentShown && timeOnPage > 30) {
            exitIntentShown = true;

            // Show a final FOMO notification
            const fomoPopup = document.getElementById('fomo-popup');
            const fomoName = document.getElementById('fomo-name');
            const fomoMessage = document.getElementById('fomo-message');

            if (fomoPopup && fomoName && fomoMessage) {
                fomoName.textContent = '¡ESPERA! 🎁';
                fomoMessage.textContent = 'No pierdas esta oferta. Primera semana GRATIS + 20% OFF';
                fomoPopup.classList.add('show');
                fomoPopup.style.background = 'rgba(255, 0, 110, 0.15)';
                fomoPopup.style.borderColor = '#ff006e';

                setTimeout(() => {
                    fomoPopup.classList.remove('show');
                }, 8000);
            }
        }
    });

    // ========================================
    // 15. WHATSAPP BUTTON PULSE ON SCROLL
    // ========================================

    const whatsappFloat = document.querySelector('.whatsapp-float');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            if (whatsappFloat && !whatsappFloat.classList.contains('pulse')) {
                whatsappFloat.classList.add('pulse');
            }
        }
    });

    // ========================================
    // 16. SOCIAL PROOF COUNTER (Visual Enhancement)
    // ========================================

    const proofNumbers = document.querySelectorAll('.proof-number');

    const proofObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                // Add animation class
                entry.target.style.animation = 'fadeIn 1s ease-out';
                proofObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    proofNumbers.forEach(num => proofObserver.observe(num));

    // ========================================
    // 17. CONSOLE MESSAGE (Easter Egg)
    // ========================================

    console.log('%c🧠 SINAPSIO — AI Appointment Agents', 'font-size: 24px; font-weight: bold; color: #00f2ff;');
    console.log('%c¿Te gusta lo que ves? Únete a nosotros! 🚀', 'font-size: 14px; color: #fff;');
    console.log('%cWhatsApp: +57 322 231 7169', 'font-size: 12px; color: #25D366;');

    // ========================================
    // 18. PREVENT FORM RESUBMISSION ON PAGE RELOAD
    // ========================================

    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // ========================================
    // 19. DYNAMIC HEADER (Navbar Scroll Effect)
    // ========================================

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

});
