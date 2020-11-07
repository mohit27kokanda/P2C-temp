

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    // var scroll =$(window).scrollDown();

    
    if (scroll >= 300 & scroll <=1500 ) {
 
$('.initialClass4').addClass('img4');
$('.initialClass1').addClass('imgRotation1');
$('.initialClass2').addClass('imgRotation2');
$('.initialClass3').addClass('imgRotation3');
$('.initialClass4').addClass('imgRotation4');
$('.initialClass5').addClass('imgRotation5');
$('.initialClass6').addClass('imgRotation6');
$('.initialClass7').addClass('imgRotation7');
$('.C2-bg-video').addClass('video-show');
$('.img-div').addClass('dimnishAnimation');
}
    else {
        $(".clearHeader").removeClass("darkHeader");
        $('.initialClass4').removeClass('img4');
$('.initialClass1').removeClass('imgRotation1');
$('.initialClass2').removeClass('imgRotation2');
$('.initialClass3').removeClass('imgRotation3');
$('.initialClass4').removeClass('imgRotation4');
$('.initialClass5').removeClass('imgRotation5');
$('.initialClass6').removeClass('imgRotation6');
$('.initialClass7').removeClass('imgRotation7');
$('.C2-bg-video').removeClass('video-show');
$('.img-div').removeClass('dimnishAnimation');
    }
}); 

// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
   

    
//     if (scroll >=900 & scroll <=1500 ) {
//         $('.VideoPlayCircle').addClass('VideoPlayCircle-animation');

// }
//     else {
//         $('.VideoPlayCircle').removeClass('VideoPlayCircle-animation');
//         $('.VideoPlayCircle').addClass('play-circles ');
//     }
// }); 





$('.VideoPlayCircle').on('click',function(){
    $('.rightContainer').addClass('whole-page-display');
    $('.rowOf2-after').addClass('whole-page-display');
    $('.leftContainer-after').addClass('whole-page-display');
    $('.playBack-button-in-circle').addClass('whole-page-display');
    $('.slideshow-container').addClass('whole-page-display');
    $('.container-2').addClass('container-2-after');
    $('.C3-Bigger-Container').addClass('whole-page-display');
    $('.Container-4-big').addClass('whole-page-display');
    $('.C5-container').addClass('whole-page-display');
    $('.Container-6').addClass('whole-page-display');
    $('.Conatiner-7').addClass('whole-page-display');
    $('.C8-bigger-container').addClass('whole-page-display');
    $('.footer-index-bigger').addClass('whole-page-display');
    $('.Play-back-button').addClass('Play-back-button-index');
    $('.C-2-Video-logo').removeClass('whole-page-display');
});
$('.play-close').on('click',function(){
    $('.rightContainer').removeClass('whole-page-display');
    $('.rowOf2-after').removeClass('whole-page-display');
    $('.leftContainer-after').removeClass('whole-page-display');
    $('.slideshow-container').removeClass('whole-page-display');
    $('.container-2').removeClass('container-2-after');
    $('.C3-Bigger-Container').removeClass('whole-page-display');
    $('.Container-4-big').removeClass('whole-page-display');
    $('.C5-container').removeClass('whole-page-display');
    $('.Container-6').removeClass('whole-page-display');
    $('.Conatiner-7').removeClass('whole-page-display');
    $('.C8-bigger-container').removeClass('whole-page-display');
    $('.footer-index-bigger').removeClass('whole-page-display');
    $('.Play-back-button').removeClass('Play-back-button-index');
    $('.playBack-button-in-circle').removeClass('whole-page-display');
    $('.C-2-Video-logo').addClass('whole-page-display');
});

$('.Scroll-div').on('mouseover',function(){
$('.vertical-small-line').addClass('vertical-small-line-animation');
});
$('.Scroll-div').on('mouseout',function(){
    $('.vertical-small-line').removeClass('vertical-small-line-animation');
    });


$('.navbar-toggler-icon-line').on('click',function(){
    $('.navbar-toggler-icon-line').addClass('none-display');
    $('.marquee-line').addClass('none-display');
    $('.marquee-line-2').addClass('none-display');
    $('.arrow-div').addClass('none-display');
    $('.elements-d').addClass('none-display');
    $('.navbar-toggler-icon-cross').addClass('remove-display-none');

    });
    $('.navbar-toggler-icon-cross').on('click',function(){
        $('.navbar-toggler-icon-cross').removeClass('remove-display-none');
        $('.navbar-toggler-icon-line').removeClass('none-display');
        $('.marquee-line').removeClass('none-display');
        $('.marquee-line-2').removeClass('none-display');
        $('.arrow-div').removeClass('none-display');
        $('.elements-d').removeClass('none-display');
    });

