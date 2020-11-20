import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const btnAdd = document.querySelector(".button__add");
const btnDel = document.querySelector(".button__del");

btnAdd.addEventListener("click", () => {
  const span = document.querySelector(".hello__glass--number");
  let number = parseInt(span.textContent);

  console.log(number);

  if (number >= 0) {
    number++;
    console.log(number);
    span.innerHTML = number;
  }
});
btnDel.addEventListener("click", () => {
  const span = document.querySelector(".hello__glass--number");
  let number = parseInt(span.textContent);

  console.log(number);

  if (number == 0) {
      return;
  }else{
    number--;
    console.log(number);
    span.innerHTML = number;
  }

});
