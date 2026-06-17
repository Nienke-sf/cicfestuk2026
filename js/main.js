/* =====================================================
   CICFEST UK — main.js
===================================================== */
 
document.addEventListener('DOMContentLoaded', () => {
 
  /* ------------------------------------------------
     HAMBURGER MENU (Bulma)
  ------------------------------------------------ */
  const burger = document.getElementById('nav-burger');
  const menu   = document.getElementById('navbar-menu');
 
  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
 
    // Close menu when a nav link is clicked (mobile UX)
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
      });
    });
  }
 
  /* ------------------------------------------------
     SMOOTH SCROLL for anchor links
  ------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
 
});