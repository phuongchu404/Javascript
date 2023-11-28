"use strict";
const openModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
console.log(openModal);
console.log(modal);
console.log(overlay);
console.log(modal.classList);
console.log(overlay.classList);
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
openModal.forEach((btn) => {
  btn.addEventListener("click", showModal);
});
closeModal.addEventListener("click", close);
overlay.addEventListener("click", close);
