document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Select all sections
    const sections = document.querySelectorAll('.section');

    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump

            // Get target section id from data-attribute
            const targetId = link.getAttribute('data-target');

            // 1. Update Navigation State
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');

            // 2. Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 3. Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});
