var logo = document.querySelector("#logo");

var paths = ["./assets/Images/homepage/logo.jpg", "./assets/Images/homepage/logo2.png"];

var i = 0;

setInterval(function () {
    logo.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        logo.src = paths[i];
        i++;
        if (i == paths.length) {
            i = 0;
        }
        logo.style.transform = "rotateY(360deg)";
    }, 700);
}, 1500);
