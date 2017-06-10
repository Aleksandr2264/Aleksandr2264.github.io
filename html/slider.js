$(function() {      
    var width=$('.slider-box').width();
    interval = 10000;
    $('.slider img:last').clone().prependTo('.slider');
    $('.slider img').eq(1).clone().appendTo('.slider');  
    $('.slider').css('margin-left', -width);
    setInterval('animation()',interval);
});

function animation(){
    var margin = parseInt($('.slider').css('marginLeft'));
    width=$('.slider-box').width(),
    slidersAmount=$('.slider').children().length;
    if(margin!=(-width*(slidersAmount-1)))
{
    margin=margin-width;
} else{ 
    $('.slider').css('margin-left', -width);
    margin=-width*2;         
}
    $('.slider').animate({marginLeft:margin},794);
};


$(document).ready(function(){
$("#down").click(function(){
    var curPos=$(document).scrollTop();
    var height=$("body").height();
    var scrollTime=(height-curPos)/1.73;
$("body,html").animate({"scrollTop":height},scrollTime);
});
});

