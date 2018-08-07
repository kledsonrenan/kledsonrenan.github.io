function scrollRibbon() {
	let ribbon = document.querySelector('.ribbon');
	let k = ribbon.offsetTop;

	if (window.pageYOffset > k) {
		ribbon.classList.add('ribbon-scrroll-fixed');
	}
	else {
		ribbon.classList.remove('ribbon-scrroll-fixed');
	}
};

document.querySelector(".ribbon .ribbon-list .icon").addEventListener("click", function() {
    let x = document.querySelector('.ribbon-list');

    if (x.className === 'ribbon-list') {
        x.classList.add('responsive');
    } else {
        x.classList.remove('responsive');
    }
});

window.onscroll = function() {
	scrollRibbon();
}

$(function() {
	let timeout = 3500;
	$('.ribbon-item #sobre').click(function() {
		let x = $('#about').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});

	$('.ribbon-item #experiencia').click(function() {
		let x = $('#experience').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});

	$('.ribbon-item #formacao').click(function() {
		let x = $('#formation').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});

	$('.ribbon-item #habilidade').click(function() {
		let x = $('#skills').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});

	$('.ribbon-item #contato').click(function() {
		let x = $('#contact').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});
});