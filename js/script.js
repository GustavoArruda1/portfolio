const menuMobile = document.querySelector('.menu');
const icon = document.querySelector('.icon');
const menuButton = document.getElementById('menu-mobile');
const menuLinks = document.querySelectorAll('.menu a');

// Função que abre e fecha o menu
function menuView() {
    menuMobile.classList.toggle('open');
    const isOpen = menuMobile.classList.contains('open');
    icon.src = isOpen ? "./img/menu-x-icon.svg" : "./img/icon-menu.svg";
}

menuButton.addEventListener('click', function (event) {
    event.stopPropagation();
    menuView();
});

document.addEventListener('click', function (event) {
    if (menuMobile.classList.contains('open') &&
        !menuMobile.contains(event.target) &&
        !menuButton.contains(event.target)) {
        menuMobile.classList.remove('open');
        icon.src = "./img/icon-menu.svg";
    }
});

// Fecha o menu ao clicar em qualquer link dentro dele
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menuMobile.classList.remove('open');
        icon.src = "./img/icon-menu.svg";
    });
});
