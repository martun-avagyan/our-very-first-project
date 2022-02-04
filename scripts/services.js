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
const modalContent = document.querySelector(".modalWrapper");

// End Selectors

// Functions
const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModalWithMyContent = function (element, content) {
  element.addEventListener("click", function () {
    showModal();
    modalContent.insertAdjacentHTML("beforeend", content);
  });
};

// End Functions

// Global Variables

const contentGym = "<div> <h3>GYM</h3> <p></p></div>";
const contentGX = "<div> <h3>Group Exercises</h3> <p></p></div>";
const contentSP = "<div> <h3>Swimming Pool</h3> <p></p></div>";
const contentPT = "<div> <h3>Personal Trainers</h3> <p></p></div>";
const contentSPA = "<div> <h3>SPA</h3> <p></p></div>";
const contentKids = "<div> <h3>For Kids</h3> <p></p></div>";

// End Global Variables

overlay.addEventListener("click", function () {
  modalContent.textContent = "";
  hideModal();
});

button.addEventListener("click", function () {
  modalContent.textContent = "";
  hideModal();
});

openModalWithMyContent(infoGym, contentGym);
openModalWithMyContent(infoGX, contentGX);
openModalWithMyContent(infoSP, contentSP);
openModalWithMyContent(infoPT, contentPT);
openModalWithMyContent(infoSPA, contentSPA);
openModalWithMyContent(infoKids, contentKids);
