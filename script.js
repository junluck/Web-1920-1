//Storing dom elements in variables so that it can be used for the navbar menu 
const hamburger = document.querySelector('.hamBurgerMenu');
const xMenu = document.querySelector('.xMenu');
const navigationBar = document.querySelector('.navigationBar');;
const logo = document.querySelector('.logo');
const hiddenMenu = document.querySelector(".hiddenMenu")

//Adding event listener to the hamburger menu so that when it gets clicked the menu will appear
hamburger.addEventListener("click", () => {
    hamburger.style.opacity = "0";
    xMenu.style.opacity = "1"
    hamburger.style.zIndex = "0";
    xMenu.style.zIndex = "2"
    navigationBar.classList.toggle('active');
    logo.classList.toggle('active');
    hiddenMenu.style.opacity = "1";
    hiddenMenu.style.visibility = "visible";
    xMenu.style.transition = "all 0ms"
    hamburger.style.transition = "all 0ms"

    
});


//Adding event listener to the X menu so that when it gets clicked the menu will disappear
xMenu.addEventListener("click", (event) => {
    navigationBar.classList.toggle('active');
    logo.classList.toggle('active');
    xMenu.style.opacity = "0";
    hamburger.style.opacity = "1";
    hamburger.style.zIndex = "1";
    xMenu.style.zIndex = "0";
    hiddenMenu.style.opacity = "0"
    hiddenMenu.style.visibility = "hidden";
    xMenu.style.transition = "all 400ms"
    hamburger.style.transition = "all 400ms"
    
});


//Storing dom elements in variables so that it can be used for the select item dropdown menu
const itemOne = document.querySelector(".itemOne");
const itemTwo = document.querySelector(".itemTwo");
const itemThree = document.querySelector(".itemThree");
const select = document.querySelector(".select");
const triangle = document.querySelector(".triangle");

//function that listens if element passed in function is clicked and then toggles the active class to the items
function displayItems(selectAndTriangle){
    selectAndTriangle.addEventListener("click", () => {
        itemOne.classList.toggle("active");
        itemTwo.classList.toggle("active");
        itemThree.classList.toggle("active");
    })
}

//Invoking the function with the select and triangle passed in as a parameter
displayItems(select);
displayItems(triangle);







