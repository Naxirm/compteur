const btnIncrease = document.getElementsByClassName("button-increase");
const btnReset = document.getElementsByClassName("button-reset");
const btnDecrease = document.getElementsByClassName("button-decrease");
const afficheValue = document.getElementById("value");

let value = 0;

btnIncrease[0].addEventListener("click", function () {
  value++;
  afficheValue.textContent = value;
  if (value === 0) {
    afficheValue.style.color = "rgb(65, 58, 58)";
  } else if (value > 0) {
    afficheValue.style.color = "rgb(56, 224, 56)";
  } else {
    afficheValue.style.color = "crimson";
  }
});

btnDecrease[0].addEventListener("click", function () {
  value--;
  afficheValue.textContent = value;
  if (value === 0) {
    afficheValue.style.color = "rgb(65, 58, 58)";
  } else if (value > 0) {
    afficheValue.style.color = "rgb(56, 224, 56)";
  } else {
    afficheValue.style.color = "crimson";
  }
});

btnReset[0].addEventListener("click", function () {
  value = 0;
  afficheValue.textContent = value;
  if (value === 0) {
    afficheValue.style.color = "rgb(65, 58, 58)";
  } else if (value > 0) {
    afficheValue.style.color = "green";
  } else {
    afficheValue.style.color = "red";
  }
});
