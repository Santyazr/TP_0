
const menu = document.querySelector(".menu");
const AbrirMenuBtn = document.querySelector(".abrir-menu");
const CerrarMenuBtn = document.querySelector(".cerrar-menu");

function toggleMenu() {
  menu.classList.toggle("menu_abierto");
}

AbrirMenuBtn.addEventListener("click", toggleMenu);
CerrarMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_abierto");
  });
});

