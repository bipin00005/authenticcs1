document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');

    // Toggle mobile menu
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Handle submenu toggles on mobile
    hasSubmenuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');

        // Create toggle button for mobile
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'submenu-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
        link.appendChild(toggleBtn);

        // Toggle submenu on click (mobile only)
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Close other open submenus
            hasSubmenuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            hasSubmenuItems.forEach(item => item.classList.remove('active'));
        }
    });

    // Handle window resize
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', function() {
        if (window.innerWidth !== windowWidth) {
            windowWidth = window.innerWidth;
            
            // Reset mobile menu state on window resize
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            hasSubmenuItems.forEach(item => item.classList.remove('active'));
        }
    });

    // Add scroll event for navbar styling
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}); 