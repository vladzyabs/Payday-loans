const rangeYouNeed = document.getElementById('range__you_need')
const selectedYouNeed = document.getElementById('select-box__you-need')
const formYouNeed = document.getElementById('form-you-need')

let value = 100

rangeYouNeed.oninput = function () {
    selectedYouNeed.value = rangeYouNeed.value
    value = rangeYouNeed.value
    // rangeYouNeed.style.cssText = `background: -webkit-linear-gradient(left, $color-yellow 0%, $color-yellow 25%, $color-blue-light 25%, $color-blue-light 100%);`
}

selectedYouNeed.addEventListener('change', e => {
    rangeYouNeed.value = selectedYouNeed.value
    value = selectedYouNeed.value
})

formYouNeed.addEventListener("submit", (e) => {
    e.preventDefault()
    alert(value)
})

//burger menu

const menu = document.getElementById('menu');
const links = document.querySelectorAll('.menu__nav-link');
const burger = document.getElementById('burger');
const burgerLine = document.querySelectorAll('.burger__line');
let activeMenu = false;

const showMenu = () => {
    menu.classList.add('menu__show');
    activeMenu = true;
    burger.classList.add('burger__close');
}

const hideMenu = () => {
    menu.classList.remove('menu__show');
    activeMenu = false;
    burger.classList.remove('burger__close');
}

burger.onclick = () => {
    (!activeMenu) ? showMenu() : hideMenu();
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', () => {
            hideMenu();
        })
    }
}

(function () {
    window.onscroll = () => {
        if (window.pageYOffset > 1) {
            hideMenu()
        }
    }
}());