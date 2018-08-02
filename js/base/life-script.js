let $ = document.querySelector.bind(document);

function scrollRibbon() {
	let ribbon = $('.ribbon');
	let k = ribbon.offsetTop;

	if (window.pageYOffset > k) {
		ribbon.classList.add('ribbon-scrroll-fixed');
	}
	else {
		ribbon.classList.remove('ribbon-scrroll-fixed');
	}
};

$(".ribbon .ribbon-list .icon").addEventListener("click", function menu() {
    let x = $('.ribbon-list');

    if (x.className === 'ribbon-list') {
        x.classList.add('responsive');
    } else {
        x.classList.remove('responsive');
    }
});

window.onscroll = function() {
	scrollRibbon();
}