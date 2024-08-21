document.addEventListener('DOMContentLoaded', () => {
    // Function to handle intersection
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && window.innerWidth > 768) {
                const settings = JSON.parse(entry.target.dataset.settings);
                const animationClass = settings._animation;
                entry.target.classList.add('animated');
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the 'animate-on-scroll' class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        observer.observe(el);
    });

    // Ensure smooth scroll behavior
    document.body.style.scrollBehavior = 'smooth';
});
