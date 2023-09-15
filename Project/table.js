let imageArray = ["agera.png","bugatti.jpg","fxxk.jpg","peel.jpg"]
let imageArray2 = ["agerastats.png","chironstats.png","fxxkstats.png","peelstats.png"]
let i = 0
let j = 0
function nextSlide() {
    if (i < imageArray.length) {
        i++
        document.getElementById("image").src = imageArray[i-1];
    } else {
        i = 1
        document.getElementById("image").src = imageArray[i-1];
    }
    if (j < imageArray2.length) {
        j++
        document.getElementById("image2").src = imageArray2[j-1];
    } else {
        j = 1
        document.getElementById("image2").src = imageArray2[j-1];
    }
}   