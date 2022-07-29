"use strict";
// js for Sticky header
let nav = document.querySelector("header");
let texts = document.querySelectorAll("header li a");
let registerBtn = document.querySelector(".register-btn");
let regColor = document.querySelector(".register-btn a");
let logo = document.querySelector(".logo");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    logo.classList.add("logo-sticky");
    texts.forEach((text) => text.classList.add("anchor_text-white"));
    registerBtn.classList.add("reg_btn-sticky");
    regColor.classList.add("reg-color");
  } else {
    nav.classList.remove("sticky");
    texts.forEach((text) => text.classList.remove("anchor_text-white"));
    logo.classList.remove("logo-sticky");
    registerBtn.classList.remove("reg_btn-sticky");
    regColor.classList.remove("reg-color");
  }
};

// Q & A section
const questions = document.querySelectorAll(".question-container h5");
const questionContainer = document.querySelectorAll(".question-container");
const answers = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".fa-angle-down");

questions.forEach((question, index) => {
  let x = true;
  question.addEventListener("click", () => {
    answers[index].classList.toggle("hidden");
    answers[index].classList.add("animationFadeIn");
    answers.forEach(
      (ans) => ans != answers[index] && ans.classList.add("hidden")
    );
    if (x) {
      arrow[index].classList.replace("fa-angle-down", "fa-angle-up");
      x = false;
    } else {
      arrow[index].classList.replace("fa-angle-up", "fa-angle-down");
      x = true;
    }
  });
});

// js to switch Login and Register field
const signUpBtn = document.querySelector(".signBtn");
const loginBtn = document.querySelector(".login-btn");
const title = document.querySelector(".state-text");
const hideInputs = document.querySelectorAll(".input_field");
const loginForm = document.querySelector(".sign-up form");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = `Login`;
  loginBtn.classList.add("active-btn");
  signUpBtn.classList.remove("active-btn");
  hideInputs.forEach((input) => input.classList.add("hidden"));
  loginForm.classList.add("login-form_margin");
});
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = `Sign In`;
  loginBtn.classList.remove("active-btn");
  signUpBtn.classList.add("active-btn");
  loginForm.classList.remove("login-form_margin");
  hideInputs.forEach((input) => input.classList.remove("hidden"));
});
// js to show mobile menu
const menuBar = document.querySelector(".menu-bar");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLists = document.querySelectorAll(".mobile-menu ul li a");
let clicked = true;
menuBar.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.add("animationSlideInLeft");
  if (clicked) {
    menuBar.classList.replace("fa-bars", "fa-times");
    clicked = false;
  } else {
    menuBar.classList.replace("fa-times", "fa-bars");
    clicked = true;
  }
});
menuLists.forEach((list) =>
  list.addEventListener("click", () => {
    menuBar.classList.replace("fa-times", "fa-bars");
    mobileMenu.classList.add("hidden");
    clicked = true;
  })
);
// Appear onScroll
const reveals = document.querySelectorAll(".all-sec");
console.log(reveals);

for (var i = 0; i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var revealPoint = reveals[i].getBoundingClientRect().top;
  var revealTop = 150;
  if (revealTop < windowHeight - revealPoint) {
    console.log("active");
  } else {
  }
}
