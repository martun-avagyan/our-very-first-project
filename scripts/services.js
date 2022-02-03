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

// Selectors

const modal = document.querySelector(".modal");
const infoGym = document.querySelector(".infoGym");
const infoGX = document.querySelector(".infoGX");
const infoSP = document.querySelector(".infoSP");
const infoPT = document.querySelector(".infoPT");
const infoSPA = document.querySelector(".infoSPA");
const infoKids = document.querySelector(".infoKids");
const overlay = document.querySelector(".overlay");
const button = document.querySelector(".closeModal");

// End Selectors

infoGym.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  const key = this.getAttribute("data-attribute-key");

  const modalTitleEl = document.getElementById("modalTitle");
  const modalDescEl = document.getElementById("modalDescription");
  modalTitleEl.innerHTML = texts[key].title;
  modalDescEl.innerHTML = texts[key].description;
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

const texts = {
  infoGYM: {
    title: "Most Advanced Equipment",
    description: "<p class='title'>Just some text</p>",
  },
};

button.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
