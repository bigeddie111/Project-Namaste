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

window.addEventListener('scroll', () => {
    if (window.scrollY >= 250) {
        navEl.classList.add('fixed-top')
        navEl.classList.add('navbar-scrolled');
        navImg.style.width = "30%";
        navImg.style.marginBottom = ".80em";

    } else {
        navEl.classList.remove('fixed-top')
        navEl.classList.remove('navbar-scrolled');
        navImg.style.width = "50%";
        navImg.style.marginBottom = "0";
    }
})