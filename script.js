let parallax = document.querySelector("header nav");

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

//Contact Form

