document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');

    // Toggle mobile menu
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Handle submenu toggles
    hasSubmenuItems.forEach(item => {
        const link = item.querySelector('a');
        
        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'submenu-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
        link.appendChild(toggleBtn);

        // Toggle submenu on mobile
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (window.innerWidth <= 1024) {
                item.classList.toggle('active');
            }
        });

        // Prevent link click on mobile if has submenu
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024 && item.querySelector('.submenu')) {
                e.preventDefault();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
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