let parallax = document.querySelector("header");

window.addEventListener("scroll", () => {
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




window.addEventListener('scroll', () => {
    if (window.scrollY >= 250 && window.innerWidth >= 992) {
        navEl.style.marginTop = "0em";
        navEl.classList.add('fixed-top')
        navEl.classList.add('navbar-scrolled');
        navImg.style.width = "5vw";
        navTextNormal.forEach(element => {
            element.style.color = "black";
            element.addEventListener("mouseenter", () => {
                element.style.color = "white";
            })

            element.addEventListener("mouseleave", () => {
                element.style.color = "black";
            })
        })

        navOrder.style.color = "black";

        navOrder.addEventListener("mouseenter", () => {
            navOrder.style.backgroundColor = "transparent";
            navOrder.style.color = "white";
        })

        navOrder.addEventListener("mouseleave", () => {
            navOrder.style.backgroundColor = "transparent";
            navOrder.style.color = "black";
        })



    } else if (window.innerWidth >= 992) {
        navEl.style.marginTop = "4em";
        navEl.classList.remove('fixed-top')
        navEl.classList.remove('navbar-scrolled');
        navImg.style.width = "9vw";
        navImg.style.marginBottom = "0";        
        navTextNormal.forEach(element => {
            element.style.color = "white";
            element.addEventListener("mouseenter", () => {
                element.style.color = "rgb(202, 202, 202)";
            })

            element.addEventListener("mouseleave", () => {
                element.style.color = "white";
            })
        })
        navOrder.style.color = "white";
        
        navOrder.addEventListener("mouseenter", () => {
            navOrder.style.backgroundColor = "white";
            navOrder.style.color = "black";
        })

        navOrder.addEventListener("mouseleave", () => {
            navOrder.style.backgroundColor = "transparent";
            navOrder.style.color = "white";
        })

        
    } 
    
})


//New Year's 

const fireworks = new Fireworks.default(fireWorksContainer);
fireworks.start();
window.addEventListener("load", function() {
    // Function to execute after 5 seconds
    setTimeout(function() {
        // Your code here
        const fireworks = document.querySelector(".fireworks");
        const newYearsh3 = document.querySelector(".fireworksH3")
        const newYearsClose = document.querySelector("#closeFireworks")
        const mainBody = document.querySelector(".popupBlockContent");

        newYearsh3.classList.remove("h3Hidden");
        newYearsh3.classList.add("h3Hover");
        newYearsClose.classList.remove("buttonHidden");

        newYearsClose.addEventListener("click", () => {
            console.log("works");
            mainBody.style.display = "block" ;
            fireworks.style.display = "none" ;
        })
    }, 3500); // 5000 milliseconds = 5 seconds
});


const aboutView = document.querySelector("#about-view-our-menu");

aboutView.addEventListener("click", () => {
    window.open("https://order.tbdine.com/pickup/50672", "_blank");
})