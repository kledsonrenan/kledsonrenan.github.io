let seconds = 5000; // 5 seconds

setTimeout(() => {
    $(() => {
        let timeout = 3000;
        let x = $('.navbar').offset().top;
        $('html,body').animate({scrollTop:x}, timeout, 'swing');
    });
}, seconds);