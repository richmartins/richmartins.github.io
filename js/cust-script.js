$( document ).ready(function() {
    $('h4, h5, h6').each(function() {
      $elf = $(this)
        $("#scroll-ul").append(
            $("<li>", {}).append(
                $("<a>", { href: "#" + $elf.attr('id') }).text(
                $elf.text()
                )
            )
        )
    })
    console.log('jquery is loaded');
});
