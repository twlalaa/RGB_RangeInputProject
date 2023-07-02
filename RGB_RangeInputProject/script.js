"use strict";

let inputEl = document.querySelectorAll("input");
let finalEl = document.getElementById("final");

for (let i = 0; i < inputEl.length; i++) {
  inputEl[i].addEventListener("input", () => {
    document.body.style.backgroundColor = `rgb(${inputEl[0].value}, ${inputEl[1].value}, ${inputEl[2].value})`;
    finalEl.textContent = `rgb(${inputEl[0].value},${inputEl[1].value},${inputEl[2].value})`;
  });
}
