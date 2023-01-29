let offset = 0;
const sliderLine = $('.slider-line');
let slide = null; 
let secondSlide = null; 
let lastSlide = null; 
function windowWidth(width){
    slide = width > 850 ? 800 : width > 700 ? 600 : width > 550 ? 400 : 310; 
    secondSlide = slide * 2;
    lastSlide = slide * 3 - 1 ;
}

$(".slider-next").click( function(){
    windowWidth($(window).width());
    offset = offset + slide;
    if (offset > lastSlide) {
        offset = 0;
    }
    sliderLine.css('left', -offset + 'px');
});

$('.slider-prev').click( function () {
    windowWidth($(window).width());
    offset = offset - slide;
    if (offset < 0) {
        offset = secondSlide;
    }
    sliderLine.css('left', -offset + 'px');
    
});



let minute = 30;
let sec = 0;
let timer = setInterval(function(){
    $('.timer').html((minute < 10 ? '0' + minute : minute) + ':' + (sec < 10 ? '0' + sec : sec));
    if(minute <= 0 && sec <= 0){
        $('.timer').html("00:00");
        clearInterval(timer);
    }
    sec--;
    if(sec <= 0 && minute > 0){
        minute--;
        sec = 59;
    }
    
}, 1000)


$('.input').focus(() => $('.example-text').css('visibility', 'visible'))
$('.input').blur(() => $('.example-text').css('visibility', 'hidden'))
