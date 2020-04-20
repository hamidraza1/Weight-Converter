var input = document.querySelector(".input");
var gramValue = document.querySelector(".gram-value");
var gram = document.querySelector(".gram");

var kilogramValue = document.querySelector(".kilogram-value");
var kilogram = document.querySelector(".kilogram");

var ounceValue = document.querySelector(".ounce-value");
var ounce = document.querySelector(".ounce");

input.addEventListener("input", (val) => {
  gram.style.display = "block";
  kilogram.style.display = "block";
  ounce.style.display = "block";

  gramValue.innerHTML = val.target.value * 453.592;
  kilogramValue.innerHTML = val.target.value * 0.453592;
  ounceValue.innerHTML = val.target.value * 16;
});
input.addEventListener("input", (val) => {
  if (!val.target.value) {
    gram.style.display = "none";
    kilogram.style.display = "none";
    ounce.style.display = "none";
  }
});
