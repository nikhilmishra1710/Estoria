const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")
console.log(hamburger)


hamburger.addEventListener("click", () => {
    
    if(navbar.style.display === "flex"){
        // navbar.style.transform = "translateX(0%)"
        navbar.style.transform = "translateX(-150%)"
        setTimeout(()=>{
            navbar.style.display = "none"
        },750); 
        // navbar.style.transform = "translateX(-150%)"
    }
    else{
        navbar.style.display = "flex"
        // navbar.style.transition = "0.5s"
        // navbar.style.transitionTimingFunction = "ease-in-out"
        navbar.style.transform = "translateX(-150%)"
        setTimeout(()=>{
            navbar.style.transform = "translateX(0%)"
        },1); 
        
    }
})