const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
    if(navbar.style.display === "flex"){
        navbar.style.display = "none"
        navbar.style.transition = "0.5s"
        navbar.style.transitionTimingFunction = "ease-in-out"
        navbar.style.transform = "translateX(-100%)"
    }
    else{
        navbar.style.display = "flex"
        navbar.style.transition = "0.5s"
        navbar.style.transitionTimingFunction = "ease-in-out"
        navbar.style.transform = "translateX(0%)"
        
    }
})