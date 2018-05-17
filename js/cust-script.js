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
});
