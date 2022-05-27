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

// Обработчик кликов. Клик по любому элементу
addEventListener('click', function () {
	checkAndOffsetMenu();
});

// Обработчик загрузки страницы. Действие после загрузки
document.addEventListener('DOMContentLoaded', function() {
	checkAndOffsetMenu();
}, false);

// Раскрытие/Закрытие меню по клику
let menuItem = document.getElementsByClassName("menu__item");
for (let i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener('click', function() {
		let item = menuItem[i];
		if(item.classList.contains("active")) {
			item.classList.remove("active");
		} else {
			item.classList.add("active");
		}
	}, false);
}

// Функция - проверка и смещение меню. Если вкл режим "слабовидящ" смещение на 40px, в противном случае null
function checkAndOffsetMenu() {
	if(document.getElementById('special') != null) {
		document.getElementById('header').style.marginTop = "40px";
	} else {
		document.getElementById('header').style.marginTop = null;
	}
}

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
