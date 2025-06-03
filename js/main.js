// Testimonials Carousel
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        {
            text: "TechCorp transformed our operations completely. Their expertise and dedication to our success has been remarkable.",
            author: "Sarah Johnson",
            position: "CEO, Innovation Labs",
            company: "Innovation Labs",
            image: "assets/images/client1.jpg"
        },
        {
            text: "The level of professionalism and technical expertise exceeded our expectations. Highly recommended for any business transformation.",
            author: "Michael Chen",
            position: "CTO, Future Systems",
            company: "Future Systems",
            image: "assets/images/client2.jpg"
        },
        {
            text: "Working with TechCorp has been a game-changer. Their solutions are innovative, reliable, and perfectly tailored to our needs.",
            author: "Emily Rodriguez",
            position: "Director of Operations, Global Corp",
            company: "Global Corp",
            image: "assets/images/client3.jpg"
        }
    ];

    let currentSlide = 0;
    const carousel = document.querySelector('.testimonials-carousel');
    const prevButton = document.querySelector('.carousel-controls .prev');
    const nextButton = document.querySelector('.carousel-controls .next');

    // Initialize carousel
    function initCarousel() {
        testimonials.forEach((testimonial, index) => {
            const slide = document.createElement('div');
            slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `
                <blockquote>
                    <p>"${testimonial.text}"</p>
                    <footer>
                        <img src="${testimonial.image}" alt="${testimonial.author}">
                        <div class="client-info">
                            <cite>${testimonial.author}</cite>
                            <span>${testimonial.position}</span>
                        </div>
                    </footer>
                </blockquote>
            `;
            carousel.appendChild(slide);
        });
    }

    // Show specific slide
    function showSlide(index) {
        const slides = document.querySelectorAll('.testimonial-slide');
        slides.forEach(slide => slide.classList.remove('active'));
        
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Event listeners for controls
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
    }

    // Auto-advance carousel
    setInterval(() => showSlide(currentSlide + 1), 5000);

    // Initialize the carousel if it exists
    if (carousel) {
        initCarousel();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add scroll class to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .testimonial-slide, .footer-section');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    showError(field);
                } else {
                    field.classList.remove('error');
                    removeError(field);
                }
            });

            if (isValid) {
                // Get form data
                const formData = new FormData(contactForm);
                const submitButton = contactForm.querySelector('button[type="submit"]');
                
                // Disable submit button and show loading state
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

                // Simulate form submission (since we don't have a backend)
                setTimeout(() => {
                    // Show success message
                    showSuccessMessage();
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Send Message';
                }, 1500);
            }
        });

        // Add input event listeners to remove error on type
        contactForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', () => {
                field.classList.remove('error');
                removeError(field);
            });
        });
    }
});

// Show error message under a field
function showError(field) {
    removeError(field);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = `${field.getAttribute('placeholder') || field.getAttribute('name')} is required`;
    field.parentNode.appendChild(errorDiv);
}

// Remove error message
function removeError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Show success message
function showSuccessMessage() {
    // Remove any existing success message
    const existingSuccess = document.querySelector('.form-success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }

    // Create and show new success message
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
    `;

    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successDiv, form);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
} 