"use strict";
let imgSlider = document.getElementById("imgSlider");

let images = [
  "/assets/images/slider-img1.jpg",
  "/assets/images/slider-img2.jpg",
  "/assets/images/slider-img3.jpg",
  "/assets/images/slider-img4.jpg",
  "/assets/images/slider-img5.jpg",
  "/assets/images/slider-img6.jpg",
];

const initSlider = function () {
  let imageIndex = 0;
  setInterval(() => {
    imgSlider.style.backgroundImage = `url(${images[imageIndex]})`;
    imageIndex === images.length - 1 ? (imageIndex = 0) : imageIndex++;
  }, 3000);
};

initSlider();
