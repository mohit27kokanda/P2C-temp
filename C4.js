var indexSlide = 1;

var timeValue;

var containerFourSlideShow;



window.addEventListener("load", function () {
    showSlides(indexSlide);
    timeValue = setInterval(function () {
        addOne(1)
    }, 5000);

    

    containerFourSlideShow.addEventListener('mouseenter', stopSlider)
    containerFourSlideShow.addEventListener('mouseleave', continueSlider)
})


function addOne(n) {
    clearInterval(timeValue);
    if (n < 0) {
        showSlides(indexSlide -= 1);
    } else {
        showSlides(indexSlide += 1);
    }

    if (n === -1) {
        timeValue = setInterval(function () {
            addOne(n + 2)
        }, 5000);
    } else {
        timeValue = setInterval(function () {
            addOne(n + 1)
        }, 5000);
    }
}

//Controls the current slide and resets interval if needed
function currentPage(n) {

    clearInterval(timeValue);
    timeValue = setInterval(function () {
        addOne(n + 1)
    }, 5000);
    showSlides(indexSlide = n);
}

function showSlides(n) {
    var i;
    var pages = document.getElementsByClassName("content-div");
    var smallCircles = document.getElementsByClassName("smallCircle");
    if (n > pages.length) {
        indexSlide = 1
    }
    if (n < 1) {
        indexSlide = pages.length
    }
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    for (i = 0; i < smallCircles.length; i++) {
        smallCircles[i].className = smallCircles[i].className.replace(" currentActive", "");
    }
    pages[indexSlide - 1].style.display = "block";
    smallCircles[indexSlide - 1].className += " currentActive";
}

stopSlider = () => {
    clearInterval(timeValue);
}

continueSlider = () => {
    clearInterval(timeValue);
    timeValue = setInterval(function () {
        addOne(indexSlide)
    }, 5000);
}

