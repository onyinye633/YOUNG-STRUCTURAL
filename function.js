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
