import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const btnAdd = document.querySelector(".button__add");
const btnDel = document.querySelector(".button__del");
const span = document.querySelector(".hello__glass--number");
span.innerHTML=localStorage.getItem('glass');


btnAdd.addEventListener("click", () => {
  const span = document.querySelector(".hello__glass--number");
  let number = parseInt(span.textContent);

  if (number >= 0) {
    number++;
    span.innerHTML = number;
  }

  localStorage.setItem('glass', number);
});


btnDel.addEventListener("click", () => {
  const span = document.querySelector(".hello__glass--number");
  let number = parseInt(span.textContent);

  if (number == 0) {
      return;
  }else{
    number--;
    span.innerHTML = number;
  }
  localStorage.setItem('glass', number);
});
