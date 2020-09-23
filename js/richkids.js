$(document).ready(function(){
    $('.js-link').on('click', function(){
        $(this).fadeOut(250).fadeIn(250, function(){
            window.location.href = $(this).data('link');
        });
    });
    $('.zoom-in').magnificPopup({type:'image'});
    $('.slide-product').slick({
        arrows: true,
        prevArrow: '<div class="slide-button-prev"><img src="https://img.icons8.com/material/96/212121/forward.png"></div>',
        nextArrow: '<div class="slide-button-next"><img src="https://img.icons8.com/material/96/212121/back.png"></div>',
    })
    $('.slide-product').show();
    $('.slide-button-prev').on('click', function(e){
        e.preventDefault();
    });
    $('.slide-button-next').on('click', function(e){
        e.preventDefault();
    });
})

$('.img').each(function(i, obj){
	var img_url = $(obj).data('img');
	var id = $(obj).attr('id');
    var elm = document.getElementById(id);
	elm.style.backgroundImage = 'url('+img_url+')';
});
