const slides = document.getElementsByClassName("carousel-item");
const indicators = document.getElementsByClassName("indicator-item");
let slidePosition = 0;
const totalSlides = slides.length;

window.onload = setInterval(moveToNextSlide, 10000);
Array.from(slides).forEach((el) => console.log(el));

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
  updateUi(slides, slidePosition, "carousel-item-visible");
  updateUi(indicators, slidePosition, "active-indicator");
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateUi(slides, slidePosition, "carousel-item-visible");
  updateUi(indicators, slidePosition, "active-indicator");
}

function updateUi(items, pos, itemClass) {
  Array.from(items).forEach((el) => el.classList.remove(itemClass));
  items[pos].classList.add(itemClass);
}