let slideIndex = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  slideIndex = n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

window.showSlide = showSlide; // Make showSlide available globally

showSlide(0); // Initialize after window.showSlide is set

setInterval(nextSlide, 3000); // Change image every 3 seconds

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  const isOpen = mainNav.classList.contains("open");
  menuIcon.style.display = isOpen ? "none" : "inline";
  closeIcon.style.display = isOpen ? "inline" : "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".image-card");
  const dots = document.querySelectorAll(".dot-card");
  let activeIndex = 0;

  function showCard(idx) {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === idx);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === idx);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      activeIndex = idx;
      showCard(activeIndex);
    });
  });

  showCard(activeIndex);
});
const sections = document.querySelectorAll('.multi-section');
const prevBtn = document.querySelector('.multi-prev');
const nextBtn = document.querySelector('.multi-next');
let current = 0;

function showSection(idx) {
  sections.forEach((sec, i) => {
    sec.style.display = (i === idx) ? 'block' : 'none';
  });
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === sections.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (current > 0) current--;
  showSection(current);
});

nextBtn.addEventListener('click', () => {
  if (current < sections.length - 1) current++;
  showSection(current);
});

showSection(current);

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Custom validation
      if (!contactForm.checkValidity()) {
        e.preventDefault();
        alert('You must add all inputs!');
        return false;
      }
      // Let the form submit to Formspree, then clear
      setTimeout(() => {
        contactForm.reset();
      }, 100);
    });
  }
});
// Spotlight Carousel (auto-advance, infinite)
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.spotlight-slide');
  let current = 0;
  function showSpotlight(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
  }
  function nextSpotlight() {
    current = (current + 1) % slides.length;
    showSpotlight(current);
  }
  showSpotlight(current);
  setInterval(nextSpotlight, 4000); // Change every 4 seconds
});
  const revealElements = document.querySelectorAll('.scroll-reveal');

  function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;

      if (elementTop < windowHeight - 60) {
        revealElements[i].classList.add('visible');
      }
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);



const switcher = document.getElementById('mySwitcher');
if (switcher) {
  const btns = switcher.querySelectorAll('.switcher-btn');
  const imgs = switcher.querySelectorAll('.switcher-img');
  btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      imgs.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
      });
    });
  });
}
const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.carousel-dots .dot');

if (track && dots.length) {
  track.addEventListener('scroll', () => {
    const slideWidth = track.offsetWidth;
    const index = Math.round(track.scrollLeft / slideWidth);

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      track.scrollTo({
        left: track.offsetWidth * i,
        behavior: 'smooth'
      });
    });
  });
}
