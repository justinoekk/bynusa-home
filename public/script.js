document.addEventListener("DOMContentLoaded", () => {
    
    // Tab Switching Logic for Skills
    const tabs = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.tech-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            tab.classList.add('active');

            const target = tab.getAttribute('data-target');

            cards.forEach(card => {
                if (target === 'all' || card.getAttribute('data-type') === target) {
                    card.style.display = "flex";
                    // Sedikit animasi saat muncul
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

    console.log("Future Portfolio Loaded.");
});