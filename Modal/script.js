"use strict";
const openModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
// console.log(openModal);
// console.log(modal);
// console.log(overlay);
// console.log(modal.classList);
// console.log(overlay.classList);
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const close = function () {
  console.log("close");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
openModal.forEach((btn) => {
  btn.addEventListener("click", showModal);
});
closeModal.addEventListener("click", close);
overlay.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(modal.classList);
  if (e.key === "Escape") {
    console.log("escape key");
    if (!modal.classList.contains("hidden")) {
      close();
    }
    console.log(modal.classList);
  }
});
