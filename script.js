"use strict";

const button = document.querySelector(".switch");
const cardPrices = document.querySelectorAll(".pricingAmount");

let monthlyPrices = [19.99, 24.99, 39.99];
let annualPrices = [119.99, 249.99, 399.99];

function togglePrice() {
  button.classList.toggle("switchAnnual");
  if (button.classList.contains("switchAnnual")) {
    cardPrices.forEach((price, index) => {
      price.textContent = annualPrices[index];
    });
  } else {
    cardPrices.forEach((price, index) => {
      price.textContent = monthlyPrices[index];
    });
  }
}
button.addEventListener("click", togglePrice);
