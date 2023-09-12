let imageArray = ["agera.png","bugatti.jpg","lightning.jpg","peel.jpg"]
let i = 0
function nextSlide() {
    if (i < imageArray.length) {
        i++
        document.getElementById("image").src = imageArray[i-1];
    } else {
        i = 1
        document.getElementById("image").src = imageArray[i-1];
    }
}