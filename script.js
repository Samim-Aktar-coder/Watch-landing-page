//!============toggle sidebar ==========
let toggleBar = document.querySelector('.toggle-bar');
let sidebar = document.querySelector('.sidebar');

toggleBar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        toggleBar.firstElementChild.classList.replace('ri-menu-2-line', 'ri-close-line');
    } else {
        toggleBar.firstElementChild.classList.replace('ri-close-line', 'ri-menu-2-line');
    }
});

//!============= swiper js ============
var swiper = new Swiper(".content-img", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//!================ Toggle Navmenu =========
let showMenu = document.querySelector('.show-menu');
let closeMenu = document.querySelector('.close-menu');
let menu = document.querySelector('.nav__menu');

showMenu.addEventListener('click', () => {
    menu.classList.add('show');
});
closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
});