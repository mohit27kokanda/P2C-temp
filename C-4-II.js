var indexSlide2 = 1;

var timeValue2;

var containerFourSlideShow2;

window.addEventListener("load", function () {
    showSlides2(indexSlide2);
    timeValue2 = setInterval(function () {
        addOne2(1)
    }, 5000);



    containerFourSlideShow2.addEventListener('mouseenter', stopSlider2)
    containerFourSlideShow2.addEventListener('mouseleave', continueSlider2)
})


function addOne2(n) {
    clearInterval(timeValue2);
    if (n < 0) {
        showSlides2(indexSlide2 -= 1);
    } else {
        showSlides2(indexSlide2 += 1);
    }



    if (n === -1) {
        timeValue2 = setInterval(function () {
            addOne2(n + 2)
        }, 5000);
    } else {
        timeValue2 = setInterval(function () {
            addOne2(n + 1)
        }, 5000);
    }
}

//Controls the current slide and resets interval if needed
function currentPage2(n) {

    clearInterval(timeValue2);
    timeValue2 = setInterval(function () {
        addOne2(n + 1)
    }, 5000);
    showSlides2(indexSlide2 = n);
}

function showSlides2(n) {
    var i;
    var pages2 = document.getElementsByClassName("content-divBusiness");
    var smallCircles2 = document.getElementsByClassName("smallCircleBusiness");
    if (n > pages2.length) {
        indexSlide2 = 1
    }
    if (n < 1) {
        indexSlide2 = pages2.length
    }
    for (i = 0; i < pages2.length; i++) {
        pages2[i].style.display = "none";
    }

    for (i = 0; i < smallCircles2.length; i++) {
        smallCircles2[i].className = smallCircles2[i].className.replace(" currentActive2", "");
    }
    pages2[indexSlide2 - 1].style.display = "block";
    smallCircles2[indexSlide2 - 1].className += " currentActive2";
}

stopSlider2 = () => {
    clearInterval(timeValue2);
}

continueSlider2 = () => {
    clearInterval(timeValue2);
    timeValue2 = setInterval(function () {
        addOne2(indexSlide2)
    }, 5000);
}
