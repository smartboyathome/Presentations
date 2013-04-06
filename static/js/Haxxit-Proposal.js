Reveal.addEventListener( 'title', function() {
    $('html.title h1 .normal').animate({
        'opacity': 1
    }, 2000, 'easeOutCubic');
    $('html.title h1 .slow').delay(500).animate({
        'opacity': 1
    }, 1000, 'easeInOutBounce');
    $('html.title h1 .delayed').delay(1000).animate({
        'opacity': 0
    }, 200, 'easeOutCubic', function() {
        $('html.title h1 .delayed').animate({
            'opacity': 1
        }, 400, 'easeInBounce');
    });
}, false );