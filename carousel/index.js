const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

window.onload = setInterval(moveToNextSlide, 10000);

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  Array.from(slides).forEach((el) =>
    el.classList.remove("carousel-item-visible")
  );
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  Array.from(slides).forEach((el) =>
    el.classList.remove("carousel-item-visible")
  );
  slides[slidePosition].classList.add("carousel-item-visible");
}
