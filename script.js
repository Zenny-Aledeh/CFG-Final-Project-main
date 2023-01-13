const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const hamburguer = document.querySelector(".hamburguer")


hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle("active");
  navbarLinks.classList.toggle('active')
})