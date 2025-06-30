
const imgs = document.querySelectorAll('.virtual-img');
const dots = document.querySelectorAll('.virtual-dots .dot');
let current = 0;

function showVirtualImg(idx) {
  imgs.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    current = i;
    showVirtualImg(current);
  });
});

// Optional: auto-slide every 4 seconds
setInterval(() => {
  current = (current + 1) % imgs.length;
  showVirtualImg(current);
}, 4000);