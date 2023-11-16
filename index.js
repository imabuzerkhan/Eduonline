// header section js starts
$(document).ready(function(){

    $('.fa-bars').click(function(){
       $(this).toggleClass('fa-times');
       $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $('.fa-bars').toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        } else{
            $('header').removeClass('header-active');
            }
       
    });
});

// header section js ends
