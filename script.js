const hamburger = document.querySelector('.hamBurgerMenu');
const xMenu = document.querySelector('.xMenu');
const navigationBar = document.querySelector('.navigationBar');
const logo = document.querySelector('.logo');
const hiddenMenu = document.querySelector(".hiddenMenu")

hamburger.addEventListener("click", () => {
    hamburger.style.opacity = "0";
    xMenu.style.opacity = "1"
    hamburger.style.zIndex = "0";
    xMenu.style.zIndex = "2"
    navigationBar.classList.toggle('active');
    logo.classList.toggle('active');
    hiddenMenu.style.opacity = "1"
    xMenu.style.transition = "all 0ms"
    hamburger.style.transition = "all 0ms"
    

    
    
});


xMenu.addEventListener("click", () => {
    navigationBar.classList.toggle('active');
    logo.classList.toggle('active');
    xMenu.style.opacity = "0";
    hamburger.style.opacity = "1";
    hamburger.style.zIndex = "1";
    xMenu.style.zIndex = "0";
    hiddenMenu.style.opacity = "0"
    xMenu.style.transition = "all 400ms"
    hamburger.style.transition = "all 400ms"
    
});









