let parallax = document.querySelector("header");

window.addEventListener("scroll", () => {
   console.log(window.pageYOffset)
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .3 + "px";
})

let loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    })
})

//Sticky NavBar
const navEl = document.querySelector(".navbar");
const navImg = document.querySelector(".navbar-img");
const navTextNormal = document.querySelectorAll("#offcanvasNavbar ul li .non-dropdown")
const navOrder = document.querySelector("#offcanvasNavbar ul li .nav-item-order")
const navDropdown = document.querySelector(".dropdown .dropdown-title");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 250) {
        navEl.classList.add('fixed-top')
        navEl.classList.add('navbar-scrolled');
        navImg.style.width = "14%";
        navImg.style.marginBottom = "5em";
        navTextNormal.forEach(element => {
            element.style.color = "black";
        })
        navOrder.style.color = "black";
        navOrder.style.border = "solid 1px black";
        navDropdown.style.color = "black";


    } else {
        navEl.classList.remove('fixed-top')
        navEl.classList.remove('navbar-scrolled');
        navImg.style.width = "30%";
        navImg.style.marginBottom = "0";        
        navTextNormal.forEach(element => {
            element.style.color = "white";
        })
        navOrder.style.color = "white";
        navOrder.style.border = "solid 1px white";
        navDropdown.style.color = "white";
    }
})

function changeToBlack(element) {
    element.style.color = "black";
}
