window.onscroll = function() {
	scrollRibbon();
}

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

function menu() {
    var x = document.querySelector('.ribbon-list');

    if (x.className === 'ribbon-list') {
        x.classList.add('responsive');
    } else {
        x.classList.remove('responsive');
    }
}