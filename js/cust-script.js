window.onscroll = function() {
    scrolly()
};

function scrolly() {
    if (document.documentElement.scrollTop > wrapper.clientHeight || document.body.scrollTop > wrapper.clientHeight) {
        document.getElementById("scroll-menu").className = "Fixed"
    } else {
        document.getElementById("scroll-menu").className = ""
    }
}
$(document).ready(function() {
    $(window).scroll(function() {
        $(".hidded").each(function(a) {
            var c = $(this).offset().top + $(this).outerHeight();
            var d = $(window).scrollTop() + $(window).height();
            if (d > c) {
                $(this).animate({
                    opacity: "1"
                }, 250)
            }
        })
    });
    $("h4").each(function() {
        $elf = $(this);
        $("#scroll-ul").append($("<li>").append($("<a>", {
            href: "#" + $elf.attr("id")
        }).text($elf.text())))
    });
    var b = $(this);
    if (b.width() < 770) {
        $("#menu").hide()
    }

    $(window).on("resize", function() {
        if (b.width() <= 770) {
            $("#menu").hide()
        } else {
            $("#menu").show()
        }
    });
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(a) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var d = $(this.hash);
            d = d.length ? d : $("[name=" + this.hash.slice(1) + "]");
            if (d.length) {
                a.preventDefault();
                $("html, body").animate({
                    scrollTop: d.offset().top
                }, 1000, function() {
                    var c = $(d);
                    c.focus();
                    if (c.is(":focus")) {
                        return false
                    } else {
                        c.attr("tabindex", "-1");
                        c.focus()
                    }
                })
            }
        }
    });
    $.fn.extend({
        animateCss: function(f, e) {
            var a = (function(d) {
                var c = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    MozAnimation: "mozAnimationEnd",
                    WebkitAnimation: "webkitAnimationEnd",
                };
                for (var h in c) {
                    if (d.style[h] !== undefined) {
                        return c[h]
                    }
                }
            })(document.createElement("div"));
            this.addClass("animated " + f).one(a, function() {
                $(this).removeClass("animated " + f);
                if (typeof e === "function") {
                    e()
                }
            });
            return this
        },
    });
    $("#wrapper-content").animateCss("bounceInUp", function() {
        $("#arrow-down").animateCss("bounce")
    })

    $(window).resize(function() {
       // This will fire each time the window is resized:
       if($(window).width() >= 1024) {
           // if larger or equal
           $('.content').removeClass('.hidded');
       } else {
           // if smaller
           $('.content').addClass('.hidded');
       }
   }).resize()
});
