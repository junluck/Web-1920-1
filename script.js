const hamburger = document.querySelector('.hamBurgerMenu');
const xMenu = document.querySelector('.xMenu');
const navigationBar = document.querySelector('.navigationBar');;
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



const itemOne = document.querySelector(".itemOne");
const itemTwo = document.querySelector(".itemTwo");
const itemThree = document.querySelector(".itemThree");
const select = document.querySelector(".select");
const triangle = document.querySelector(".triangle");

function displayItems(selectAndTriangle){
    selectAndTriangle.addEventListener("click", () => {
        itemOne.classList.toggle("active");
        itemTwo.classList.toggle("active");
        itemThree.classList.toggle("active");
    })
}

displayItems(select);
displayItems(triangle);

const packageSection = document.querySelector(".packageSection");
const sectionFive = document.querySelector(".sectionFive");






