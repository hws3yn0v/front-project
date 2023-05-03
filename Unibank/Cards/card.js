const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel__slide');

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3;
  carousel.scrollLeft = scrollLeft - walk;
});

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    slides.forEach(slide => {
      slide.classList.remove('carousel__slide--active');
    });
    slide.classList.add('carousel__slide--active');
  });
});
