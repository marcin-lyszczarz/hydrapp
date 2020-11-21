import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const btnAdd = document.querySelector(".button--add-js");
const btnDel = document.querySelector(".button--del-js");
const glassCounter = document.querySelector(".glass__counter--js");
const key = new Date().toLocaleString().slice(0, 10);

let currentGlass = 0;

const localStorageValue = localStorage.getItem(key);

if(localStorageValue){
  currentGlass = localStorageValue;
}else{
  localStorage.setItem(key, 0);
}
glassCounter.innerHTML = currentGlass;

btnAdd.addEventListener("click", () => {
  if (currentGlass >= 0) {
    currentGlass++;
  }
  glassCounter.innerHTML = currentGlass;
  localStorage.setItem(key, currentGlass);
});


btnDel.addEventListener("click", () => {
  if (currentGlass > 0) {
    currentGlass--;
  }
  glassCounter.innerHTML = currentGlass;
  localStorage.setItem(key, currentGlass);
});