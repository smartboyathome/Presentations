Reveal.addEventListener( 'title', function() {
    $('html h1.title .normal').animate({
        'opacity': 1
    }, 2000, 'easeOutCubic');
    $('html h1.title .slow').delay(500).animate({
        'opacity': 1
    }, 1000, 'easeInOutBounce');
    $('html h1.title .delayed').delay(1000).animate({
        'opacity': 0
    }, 200, 'easeOutCubic', function() {
        $('html h1.title .delayed').animate({
            'opacity': 1
        }, 400, 'easeInBounce');
    });
}, false );