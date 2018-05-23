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
  $("h4").each(function() {
    $elf = $(this);
    $("#scroll-ul").append($("<li>").append($("<a>", {
      href: "#" + $elf.attr("id")
    }).text($elf.text())))
  });
  var a = $(this);
  if (a.width() < 770) {
    $("#menu").hide()
  }
  $(window).on("resize", function() {
    if (a.width() <= 770) {
      $("#menu").hide()
    } else {
      $("#menu").show()
    }
  });
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(b) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var c = $(this.hash);
      c = c.length ? c : $("[name=" + this.hash.slice(1) + "]");
      if (c.length) {
        b.preventDefault();
        $("html, body").animate({
          scrollTop: c.offset().top
        }, 1000, function() {
          var d = $(c);
          d.focus();
          if (d.is(":focus")) {
            return false
          } else {
            d.attr("tabindex", "-1");
            d.focus()
          }
        })
      }
    }
  });
  $.fn.extend({
    animateCss: function(c, d) {
      var b = (function(f) {
        var g = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "mozAnimationEnd",
          WebkitAnimation: "webkitAnimationEnd",
        };
        for (var e in g) {
          if (f.style[e] !== undefined) {
            return g[e]
          }
        }
      })(document.createElement("div"));
      this.addClass("animated " + c).one(b, function() {
        $(this).removeClass("animated " + c);
        if (typeof d === "function") {
          d()
        }
      });
      return this
    },
  });
  $("#wrapper-content").animateCss("bounceInUp", function() {
    $("#arrow-down").animateCss("bounce")
  })
});
