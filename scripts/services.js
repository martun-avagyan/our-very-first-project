"use strict";
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

const contentGym =
  "<div> <h3>GYM</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in ipsam exercitationem deleniti quis, sequi delectus repudiandae. Voluptate eum pariatur facere error iusto odit accusamus explicabo quae qui, repellendus veritatis, magnam quos placeat dolores eaque. Tempora, esse exercitationem ullam obcaecati dolorum recusandae reprehenderit sint incidunt omnis? Velit consequuntur dolorem doloremque.</p><ul><li>First Advantage</li><li>Second Advantage</li><li>Third Advantage</li></ul></div>";
const contentGX =
  "<div> <h3>Group Exercises</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in ipsam exercitationem deleniti quis, sequi delectus repudiandae. Voluptate eum pariatur facere error iusto odit accusamus explicabo quae qui, repellendus veritatis, magnam quos placeat dolores eaque. Tempora, esse exercitationem ullam obcaecati dolorum recusandae reprehenderit sint incidunt omnis? Velit consequuntur dolorem doloremque.</p></div>";
const contentSP =
  "<div> <h3>Swimming Pool</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in ipsam exercitationem deleniti quis, sequi delectus repudiandae. Voluptate eum pariatur facere error iusto odit accusamus explicabo quae qui, repellendus veritatis, magnam quos placeat dolores eaque. Tempora, esse exercitationem ullam obcaecati dolorum recusandae reprehenderit sint incidunt omnis? Velit consequuntur dolorem doloremque.</p></div>";
const contentPT =
  "<div> <h3>Personal Trainers</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in ipsam exercitationem deleniti quis, sequi delectus repudiandae. Voluptate eum pariatur facere error iusto odit accusamus explicabo quae qui, repellendus veritatis, magnam quos placeat dolores eaque. Tempora, esse exercitationem ullam obcaecati dolorum recusandae reprehenderit sint incidunt omnis? Velit consequuntur dolorem doloremque.</p></div>";
const contentSPA =
  "<div> <h3>SPA</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in ipsam exercitationem deleniti quis, sequi delectus repudiandae. Voluptate eum pariatur facere error iusto odit accusamus explicabo quae qui, repellendus veritatis, magnam quos placeat dolores eaque. Tempora, esse exercitationem ullam obcaecati dolorum recusandae reprehenderit sint incidunt omnis? Velit consequuntur dolorem doloremque.</p></div>";
const contentKids =
  "<div> <h3>For Kids</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in ipsam exercitationem deleniti quis, sequi delectus repudiandae. Voluptate eum pariatur facere error iusto odit accusamus explicabo quae qui, repellendus veritatis, magnam quos placeat dolores eaque. Tempora, esse exercitationem ullam obcaecati dolorum recusandae reprehenderit sint incidunt omnis? Velit consequuntur dolorem doloremque.</p></div>";

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
