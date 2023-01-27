let slideIndex = 1;
let slideshows = document.getElementsByClassName('slideshow-container');

window.onload = function () {
  for (i = 0; i < slideshows.length; i++) {
    showSlides(slideIndex, i);
  }
};

// Next/previous controls
function plusSlides(n, slideshowIndex) {
  showSlides((slideIndex += n), slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  let i;
  console.log(slideshowIndex);
  let slideshow = slideshows[slideshowIndex];
  console.log(slideshow);
  let slides = slideshow.querySelectorAll('.slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
