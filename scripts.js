const menuBtn = document.querySelector('.menu-btn');
const mobMenu = document.querySelector('.main-nav');
const backdrop = document.querySelector('.backdrop')

menuBtn.addEventListener('click', event => {
    event.preventDefault;
    menuBtn.classList.toggle('menu-btn_active');
    mobMenu.classList.toggle('main-nav__active');
    backdrop.classList.toggle('backdrop__active')
})