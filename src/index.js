import './styles/main.css';

const hamburgerButtonElement = document.querySelector("#hamburger")
const drawerElement = document.querySelector("#drawer")
const heroElement = document.querySelector(".hero")
const mainElement = document.querySelector("main")

hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
})

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
})

heroElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
})