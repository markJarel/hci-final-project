// Smooth scroll and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });

    // Profile image hover effect
    const profileImg = document.querySelector('.profile-img');
    profileImg.addEventListener('mouseenter', () => {
        profileImg.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    });
    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
});