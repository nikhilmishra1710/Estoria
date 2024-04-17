var logo = document.querySelector("#logo");

var paths = ["logo.jpg", "IMG_1702.png"];

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
