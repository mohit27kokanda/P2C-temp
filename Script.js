
var slideIndex = 1;

var myTimer;

var slideshowContainer;

    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    slideShow(slideIndex);
    myTimer = setInterval(function () {
        minusSlides(1)
    }, 5000);

    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)



function minusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        slideShow(slideIndex -= 1);
    } else {
        slideShow(slideIndex += 1);
    }


    if (n === -1) {
        myTimer = setInterval(function () {
            minusSlides(n + 2)
        }, 5000);
    } else {
        myTimer = setInterval(function () {
            minusSlides(n + 1)
        }, 5000);
    }
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        minusSlides(n + 1)
    }, 5000);
    slideShow(slideIndex = n);
}

function slideShow(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        minusSlides(slideIndex)
    }, 5000);
}
function toggl(){
var data=document.querySelectorAll(".image-design");
data[0].classList.toggle('image-design-none');
data[1].classList.toggle('image-design-none');
data[2].classList.toggle('image-design-none');
data[3].classList.toggle('image-design-none');
data[4].classList.toggle('image-design-none');
data[5].classList.toggle('image-design-none');
data[6].classList.toggle('image-design-none');
var picelements=document.querySelectorAll(".elements-d");
console.log(picelements)
picelements[0].classList.toggle('image-design-none');
picelements[1].classList.toggle('image-design-none');
picelements[2].classList.toggle('image-design-none');
picelements[3].classList.toggle('image-design-none');
picelements[4].classList.toggle('image-design-none');
picelements[5].classList.toggle('image-design-none');
picelements[6].classList.toggle('image-design-none');
picelements[7].classList.toggle('image-design-none');
picelements[8].classList.toggle('image-design-none');
picelements[9].classList.toggle('image-design-none');
picelements[10].classList.toggle('image-design-none');
picelements[11].classList.toggle('image-design-none');
picelements[12].classList.toggle('image-design-none');
picelements[13].classList.toggle('image-design-none');
picelements[14].classList.toggle('image-design-none');
picelements[15].classList.toggle('image-design-none');
picelements[16].classList.toggle('image-design-none');
picelements[17].classList.toggle('image-design-none');
picelements[18].classList.toggle('image-design-none');
picelements[19].classList.toggle('image-design-none');
picelements[20].classList.toggle('image-design-none');
picelements[21].classList.toggle('image-design-none');
picelements[22].classList.toggle('image-design-none');
picelements[23].classList.toggle('image-design-none');
picelements[24].classList.toggle('image-design-none');
picelements[25].classList.toggle('image-design-none');
picelements[26].classList.toggle('image-design-none');
picelements[28].classList.toggle('image-design-none');
picelements[29].classList.toggle('image-design-none');
picelements[30].classList.toggle('image-design-none');
var dat=document.querySelectorAll(".mySlides");
console.log(dat)
dat[0].classList.toggle("my-slide-m");
dat[1].classList.toggle("my-slide-m");
dat[2].classList.toggle("my-slide-m");
dat[3].classList.toggle("my-slide-m");
dat[4].classList.toggle("my-slide-m");
var togg =document.querySelectorAll(".nav-6");

togg[0].classList.toggle("image-design-none");
togg[1].classList.toggle("image-design-none");
}







