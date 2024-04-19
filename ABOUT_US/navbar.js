const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
    if(navbar.style.display === "flex"){
        navbar.style.display = "none"
    }
    else{
        navbar.style.display = "flex"
    }
})