import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const btnAdd = document.querySelector(".button--add-js");
const btnDel = document.querySelector(".button--del-js");
const span = document.querySelector(".glass__counter--js");
// const key = new Date().toLocaleString().slice(0, 10);


span.innerHTML=localStorage.getItem('glass');

const span = document.querySelector(".glass__counter--js");
let number = parseInt(span.textContent);

btnAdd.addEventListener("click", () => {


  if (number >= 0) {
    number++;
    span.innerHTML = number;
  }

  localStorage.setItem('glass', number);
});


btnDel.addEventListener("click", () => {

  if (number > 0) {
    number--;
    span.innerHTML = number;
  }
  localStorage.setItem('glass', number);
});
