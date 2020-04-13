const menuBtn = document.querySelector('.menu-btn');
const hamburger = menuBtn.children[0];
const nav = document.querySelector('.nav');
const menuNav = nav.children[0];
const navItems = document.querySelectorAll('.menu-nav__item');

// initially the menu is not shown
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');       
        navItems.forEach(item => item.classList.remove('open')); 

        showMenu = false;
    }
}