// Показать/Скрыть стрелку на главной странице
window.addEventListener('scroll', function() {
    let scrollArrow = window.scrollY;
    const arrow = document.querySelector('.intro__line');
    
    if (scrollArrow > 100) {
        arrow.style.display = 'none';
    }
    else {
        arrow.style.display = 'block';
    }
});


// Раскрытие/Закрытие меню по клику
 $(document).ready(function(){
	$('.menu__item').click(function () {
		$(this).toggleClass('active');
    });
 });


// Увеличение картинки по клику
$(function(){
	$('.image__minimized').click(function(event) {
		var i_path = $(this).attr('src');
		$('body').append('<div id="ground__overlay"></div><div id="image__magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
		$('#image__magnify').css({
			left: ($(document).width() - $('#image__magnify').outerWidth())/2,
			top: ($(window).height() - $('#image__magnify').outerHeight())/2
		});
    $('#ground__overlay, #image__magnify').fadeIn('fast');
	});
  
	$('body').on('click', '#close-popup, #ground__overlay', function(event) {
		event.preventDefault();
		$('#ground__overlay, #image__magnify').fadeOut('fast', function() {
			$('#close-popup, #image__magnify, #ground__overlay').remove();
		});
	});
});
