let parallax = document.querySelector("header nav");

window.addEventListener("scroll", () => {
   console.log(window.pageYOffset)
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .3 + "px";
})