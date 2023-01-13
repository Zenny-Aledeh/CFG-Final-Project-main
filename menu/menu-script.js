// [START] HAMBURGUER MENU
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});
// [END] HAMBURGUER MENU

const drinksLink = document.querySelector(`.drinks-link`);
const drinksMenu = document.querySelector(`.drinks`);
const foodLink = document.querySelector(`.food-link`);
const foodMenu = document.querySelector(`.food`);

drinksLink.addEventListener(`click`, () => {
  if (drinksMenu.style.display === `none`) {
    drinksMenu.style.display = `block`;
    foodMenu.style.display = `none`;
  } else {
    foodMenu.style.display = `block`;
    drinksMenu.style.display = `none`;
  }
});

foodLink.addEventListener(`click`, () => {
  if (foodMenu.style.display === `none`) {
    foodMenu.style.display = `block`;
    drinksMenu.style.display = `none`;
  } else {
    drinksMenu.style.display = `block`;
    foodMenu.style.display = `none`;
  }
});
