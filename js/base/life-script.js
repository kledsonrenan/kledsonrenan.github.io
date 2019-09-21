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

document.querySelector(".ribbon .ribbon-list .icon").addEventListener("click", () => {
    let x = document.querySelector('.ribbon-list');

    if (x.className === 'ribbon-list') {
        x.classList.add('responsive');
    } else {
        x.classList.remove('responsive');
    }
});

window.onscroll = () => {
	scrollRibbon();
}

$(() => {
	let timeout = 3000;
	$('.ribbon-item #sobre').click((e) => {
		e.preventDefault();
		let x = $('#about').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});

	$('.ribbon-item #formacao').click((e) => {
		e.preventDefault();
		let x = $('#formation').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});

	$('.ribbon-item #habilidade').click((e) => {
		e.preventDefault();
		let x = $('#skills').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});

	$('.ribbon-item #contato').click((e) => {
		e.preventDefault();
		let x = $('#contact').offset().top;
		$('html,body').animate({scrollTop:x}, timeout, 'swing');
	});
});