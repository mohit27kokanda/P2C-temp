var indexSlide3 = 1;

var timeValue3;

var containerThreeSlideShow;

window.addEventListener("load", function () {
    showSlides3(indexSlide3);
    timeValue3 = setInterval(function () {
        addOne3(1)
    }, 5000);



    containerThreeSlideShow.addEventListener('mouseenter', stopSlider3)
    containerThreeSlideShow.addEventListener('mouseleave', continueSlider3)
})


function addOne3(n) {
    clearInterval(timeValue3);
    if (n < 0) {
        showSlides3(indexSlide3 -= 1);
    } else {
        showSlides3(indexSlide3 += 1);
    }



    if (n === -1) {
        timeValue3 = setInterval(function () {
            addOne3(n + 2)
        }, 5000);
    } else {
        timeValue3 = setInterval(function () {
            addOne3(n + 1)
        }, 5000);
    }
}

//Controls the current slide and resets interval if needed
function currentPage3(n) {

    clearInterval(timeValue3);
    timeValue3 = setInterval(function () {
        addOne3(n + 1)
    }, 5000);
    showSlides3(indexSlide3 = n);
}

function showSlides3(n) {
    var i;
    var pages3 = document.getElementsByClassName("content-div-C3");
    var smallCircles3 = document.getElementsByClassName("smallCircle-C3");
    if (n > pages3.length) {
        indexSlide3 = 1
    }
    if (n < 1) {
        indexSlide3 = pages3.length
    }
    for (i = 0; i < pages3.length; i++) {
        pages3[i].style.display = "none";
    }

    for (i = 0; i < smallCircles3.length; i++) {
        smallCircles3[i].className = smallCircles3[i].className.replace(" currentActive3", "");
    }
    pages3[indexSlide3 - 1].style.display = "block";
    smallCircles3[indexSlide3 - 1].className += " currentActive3";
}

stopSlider3 = () => {
    clearInterval(timeValue3);
}

continueSlider3 = () => {
    clearInterval(timeValue3);
    timeValue3 = setInterval(function () {
        addOne3(indexSlide3)
    }, 5000);
}
