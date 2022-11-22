const menu = document.querySelector(".header__menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    navMenu.classList.remove("active");
  }))