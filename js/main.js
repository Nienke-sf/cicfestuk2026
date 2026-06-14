// Hamburger menu toggle

const burger = document.getElementById('nav-burger');
const menu = document.getElementById('navbar-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});