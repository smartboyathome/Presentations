/*
 * Crafty code
 */

var Game = {
    start: function(stage_elem) {
        Crafty.init($(stage_elem).width(), $(stage_elem).height(), stage_elem);

        Crafty.scene('main', function() {
            Crafty.background('#07093D');
            Crafty.e('2D, DOM, Text')
                .attr({w: 800, h: 20, x: 0, y: 160})
                .text("Haxxit")
                .css({
                    'text-align': 'center',
                    'font-family': 'Digital-7',
                    'font-size': '4em'
                });
            Crafty.e('2D, DOM, Text, Mouse')
                .attr({w: 200, h: 40, x: 300, y: 440})
                .text('START')
                .css({
                    'text-align': 'center',
                    'font-family': 'Mode Seven',
                    'font-size': '1em',
                    'background': '#107FC9'
                }).bind('Click', function(e) {
                    alert('click!!!');
                });
        });

        Crafty.scene("main");
    },
    stop: function() {
        Crafty.stop(true);
    }
};

/*
 * Reveal code
 */

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

Reveal.addEventListener('slidechanged', function (event) {
    var elem = $('section.present #haxxit');
    if(elem.length === 0)
    {
        Crafty.stop(true); // stops and clears the state
    }
    else
    {
        Game.start(elem[0]);
    }
});