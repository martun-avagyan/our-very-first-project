"use strict";
// Article Variables
const gym = document.querySelector(".article-gym");
const groupExercises = document.querySelector(".article-group-exercises");
const swimmingPool = document.querySelector(".article-swimming-pool");
const personalTrainers = document.querySelector(".article-personal-trainers");
const spa = document.querySelector(".article-spa");
const forKids = document.querySelector(".article-for-kids");
// Modal Variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
console.dir(overlay);
const btnCloseModal = document.querySelector(".close-modal");
// Functions
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

gym.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
