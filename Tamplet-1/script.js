"use strict";

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const closePopup = document.querySelector(".icon-close");

console.log(wrapper);
console.log(loginLink);
console.log(registerLink);
console.log(btnPopup);

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-login");
});

closePopup.addEventListener("click", () => {
  wrapper.classList.remove("active-login");
});
