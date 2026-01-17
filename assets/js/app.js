const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('[data-slide]');
let currentSlide = 0;

const showSlide = (index) => {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
  indicators.forEach((indicator, idx) => {
    indicator.classList.toggle('active', idx === index);
  });
};

if (slides.length > 0) {
  showSlide(0);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentSlide = index;
    showSlide(index);
  });
});
