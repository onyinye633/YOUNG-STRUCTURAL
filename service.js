   // Fade-in Animation on scroll
    const services = document.querySelectorAll('.service');
    window.addEventListener('scroll', () => {
      const triggerBottom = window.innerHeight * 0.85;
      services.forEach(service => {
        const serviceTop = service.getBoundingClientRect().top;
        if (serviceTop < triggerBottom) {
          service.classList.add('show');
        }
      });
    });