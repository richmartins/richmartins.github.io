$(document).ready(function () {
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});


var app = document.getElementById('typewriteText');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello, World !')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Presentation web site')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Happy geek')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Love to code')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Eager to learn more')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Probably in the middle of a CTF')
    .pauseFor(1500)
    .start();