// [START] HAMBURGUER MENU
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});
// [END] HAMBURGUER MENU

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
