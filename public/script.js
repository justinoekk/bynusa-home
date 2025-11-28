document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================
    // 1. MOBILE MENU TOGGLE LOGIC
    // =========================================
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // =========================================
    // 2. TECH STACK TABS (Index Page Only)
    // =========================================
    const tabs = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.tech-card');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Reset Active Class
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const target = tab.getAttribute('data-target');

                cards.forEach(card => {
                    // Logic: Show All or Filter by Category
                    if (target === 'all' || card.getAttribute('data-type') === target) {
                        card.style.display = "flex";
                        // Add animation delay for smooth effect
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "translateY(0)";
                        }, 50);
                    } else {
                        card.style.display = "none";
                        card.style.opacity = "0";
                        card.style.transform = "translateY(10px)";
                    }
                });
            });
        });
    }
    
    console.log("bynusa.dev System Loaded.");
});