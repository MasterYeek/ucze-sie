"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const button = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const OpneModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", OpneModal);

//btnCloseModal.addEventListener("click", function () {
const CloseModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", CloseModal);
overlay.addEventListener("click", CloseModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    CloseModal();
  }
});
