const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 3000; // 3 seconds

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[n].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', previousSlide);

let autoSlideInterval = setInterval(nextSlide, slideInterval);

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.querySelector('.slideshow-container').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.slideshow-container').addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(nextSlide, slideInterval);
});

showSlide(currentSlide);
