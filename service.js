// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");

  // Function to reveal services when in viewport
  function revealServices() {
    const triggerBottom = window.innerHeight * 0.85;

    services.forEach(service => {
      const serviceTop = service.getBoundingClientRect().top;

      if (serviceTop < triggerBottom) {
        service.classList.add("show");
      }
    });
  }

  // Run on scroll + initial load
  window.addEventListener("scroll", revealServices);
  revealServices();
});
