window.onscroll = function() {
    scrolly()
};

function scrolly() {
    if (document.documentElement.scrollTop > wrapper.clientHeight || document.body.scrollTop > wrapper.clientHeight) {
        document.getElementById("scroll-menu").className = "Fixed";
    } else {
        document.getElementById("scroll-menu").className = "";
    }
}

$( document ).ready(function() {
    $('h4').each(function() {
      $elf = $(this);
        $("#scroll-ul").append(
            $("<li>").append(
                $("<a>", { href: "#" + $elf.attr('id') }).text($elf.text()
                )
            )
        )
    })

    var win = $(this);

    if(win.width() < 770){
        $('#menu').hide()
    }

    $(window).on('resize', function(){
        if(win.width() <= 770){
            $('#menu').hide()
        }else{
            $('#menu').show()
        }
    })

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      })
});
