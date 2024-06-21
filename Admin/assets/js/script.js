(function ($) {
  "use strict";

  // Loader
  $(".loader-wrapper").fadeOut("slow", function () {
    setTimeout(function () {
      $(this).remove();
    }, 100);
  });

  // Tap To Top Button
  $(".tap-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  // Scroll Function
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".tap-top").fadeIn();
    } else {
      $(".tap-top").fadeOut();
    }
  });

  // active link

  $(".chat-menu-icons .toogle-bar").on("click", function () {
    $(".chat-menu").toggleClass("show");
  });

  $(".mobile-title svg").on("click", function () {
    $(".header-mega").toggleClass("d-block");
  });

  $(".onhover-dropdown").on("click", function () {
    $(this).children(".onhover-show-div").toggleClass("active");
  });

  $("#flip-btn").on("click", function () {
    $(".flip-card-inner").addClass("flipped");
  });

  $("#flip-back").on("click", function () {
    $(".flip-card-inner").removeClass("flipped");
  });

  //landing header
  $(".toggle-menu").on("click", function () {
    $(".landing-menu").toggleClass("open");
  });
  $(".menu-back").on("click", function () {
    $(".landing-menu").toggleClass("open");
  });

  $(".md-sidebar-toggle").on("click", function () {
    $(".md-sidebar-aside").toggleClass("open");
  });

  // color selector
  $(".color-selector ul li ").on("click", function (e) {
    $(".color-selector ul li").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("click", function (e) {
    var outside_space = $(".outside");
    if (
      !outside_space.is(e.target) &&
      outside_space.has(e.target).length === 0
    ) {
      $(".menu-to-be-close").removeClass("d-block");
      $(".menu-to-be-close").css("display", "none");
    }
  });

  if ($(".page-wrapper").hasClass("horizontal-wrapper")) {
    $(".sidebar-list").hover(
      function () {
        $(this).addClass("hoverd");
      },
      function () {
        $(this).removeClass("hoverd");
      }
    );
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 600) {
        $(".sidebar-list").removeClass("hoverd");
      }
    });
  }

  /*----------------------------------------
       passward show hide
       ----------------------------------------*/
  $(".show-hide").show();
  $(".show-hide span").addClass("show");

  $(".show-hide span").on("click", function () {
    if ($(this).hasClass("show")) {
      $('input[name="login[password]"]').attr("type", "text");
      $(this).removeClass("show");
    } else {
      $('input[name="login[password]"]').attr("type", "password");
      $(this).addClass("show");
    }
  });
  $('form button[type="submit"]').on("click", function () {
    $(".show-hide span").addClass("show");
    $(".show-hide")
      .parent()
      .find('input[name="login[password]"]')
      .attr("type", "password");
  });

  /*=====================
        02. Background Image js
        ==========================*/
  $(".bg-center").parent().addClass("b-center");
  $(".bg-img-cover").parent().addClass("bg-size");
  $(".bg-img-cover").each(function () {
    var el = $(this),
      src = el.attr("src"),
      parent = el.parent();
    parent.css({
      "background-image": "url(" + src + ")",
      "background-size": "cover",
      "background-position": "center",
      display: "block",
    });
    el.hide();
  });

  $(".mega-menu-container").css("display", "none");
  $(".header-search").on("click", function () {
    $(".search-full").addClass("open");
  });
  $(".close-search").on("click", function () {
    $(".search-full").removeClass("open");
    $("body").removeClass("offcanvas");
  });
  $(".mobile-toggle").on("click", function () {
    $(".nav-menus").toggleClass("open");
  });
  $(".bookmark-search").on("click", function () {
    $(".form-control-search").toggleClass("open");
  });
  $(".filter-toggle").on("click", function () {
    $(".product-sidebar").toggleClass("open");
  });
  $(".toggle-data").on("click", function () {
    $(".product-wrapper").toggleClass("sidebaron");
  });

  $(".mobile-search").on("click", function () {
    $(".form-control").toggleClass("open");
  });

  $(".form-control-search input").keyup(function (e) {
    if (e.target.value) {
      $(".page-wrapper").addClass("offcanvas-bookmark");
    } else {
      $(".page-wrapper").removeClass("offcanvas-bookmark");
    }
  });
  $(".search-full input").keyup(function (e) {
    // console.log(e.target.value);
    if (e.target.value) {
      $("body").addClass("offcanvas");
    } else {
      $("body").removeClass("offcanvas");
    }
  });

  $("body").keydown(function (e) {
    if (e.keyCode == 27) {
      $(".search-full input").val("");
      $(".form-control-search input").val("");
      $(".page-wrapper").removeClass("offcanvas-bookmark");
      $(".search-full").removeClass("open");
      $(".search-form .form-control-search").removeClass("open");
      $("body").removeClass("offcanvas");
    }
  });
  $(".mode").on("click", function () {
    $(".mode i").toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
    $("body").toggleClass("dark-only");
    var color = $(this).attr("data-attr");
    localStorage.setItem("body", "dark-only");
  });

  // Language

  var tnum = "en";

  $(document).ready(function () {
    if (localStorage.getItem("primary") != null) {
      var primary_val = localStorage.getItem("primary");
      $("#ColorPicker1").val(primary_val);
      var secondary_val = localStorage.getItem("secondary");
      $("#ColorPicker2").val(secondary_val);
    }

    $(document).on("click", function (e) {
      $(".translate_wrapper, .more_lang").removeClass("active");
    });
    $(".translate_wrapper .current_lang").on("click", function (e) {
      e.stopPropagation();
      $(this).parent().toggleClass("active");

      setTimeout(function () {
        $(".more_lang").toggleClass("active");
      }, 5);
    });

    /*TRANSLATE*/
    translate(tnum);

    $(".more_lang .lang").on("click", function () {
      $(this).addClass("selected").siblings().removeClass("selected");
      $(".more_lang").removeClass("active");

      var i = $(this).find("i").attr("class");
      var lang = $(this).attr("data-value");
      var tnum = lang;
      translate(tnum);

      $(".current_lang .lang-txt").text(lang);
      $(".current_lang i").attr("class", i);
    });
  });

  var trans = [
    {
      en: "General",
      pt: "Geral",
      es: "Generalo",
      fr: "GÃƒÂ©nÃƒÂ©rale",
      de: "Generel",
      cn: "Ã¤Â¸â‚¬Ã¨Ë†Â¬",
      ae: "Ã˜Â­Ã˜Â¬Ã™â€ Ã˜Â±Ã˜Â§Ã™â€ž Ã™â€žÃ™Ë†Ã˜Â§Ã˜Â¡",
    },
    {
      en: "Dashboards,widgets & layout.",
      pt: "PainÃƒÂ©is, widgets e layout.",
      es: "Paneloj, fenestraÃ„Âµoj kaj aranÃ„Âo.",
      fr: "Tableaux de bord, widgets et mise en page.",
      de: "Dashboards, widgets en lay-out.",
      cn: "Ã¤Â»ÂªÃ¨Â¡Â¨Ã¦ÂÂ¿Ã¯Â¼Å’Ã¥Â°ÂÃ¥Â·Â¥Ã¥â€¦Â·Ã¥â€™Å’Ã¥Â¸Æ’Ã¥Â±â‚¬Ã£â‚¬â€š",
      ae: "Ã™â€žÃ™Ë†Ã˜Â­Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â¯Ã™Ë†Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â®Ã˜Â·Ã™Å Ã˜Â·.",
    },
    {
      en: "Dashboards",
      pt: "PainÃƒÂ©is",
      es: "Paneloj",
      fr: "Tableaux",
      de: "Dashboards",
      cn: " Ã¤Â»ÂªÃ¨Â¡Â¨Ã¦ÂÂ¿ ",
      ae: "Ã™Ë†Ã˜Â­Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€šÃ™Å Ã˜Â§Ã˜Â¯Ã˜Â© ",
    },
    {
      en: "Default",
      pt: "PadrÃƒÂ£o",
      es: "Vaikimisi",
      fr: "DÃƒÂ©faut",
      de: "Standaard",
      cn: "Ã©â€ºÂ»Ã¥Â­ÂÃ¥â€¢â€ Ã¥â€¹â„¢",
      ae: "Ã™Ë†Ã˜Â¥Ã™ÂÃ˜ÂªÃ˜Â±Ã˜Â§Ã˜Â¶Ã™Å ",
    },
    {
      en: "Ecommerce",
      pt: "ComÃƒÂ©rcio eletrÃƒÂ´nico",
      es: "Komerco",
      fr: "Commerce ÃƒÂ©lectronique",
      de: "E-commerce",
      cn: "Ã©â€ºÂ»Ã¥Â­ÂÃ¥â€¢â€ Ã¥â€¹â„¢",
      ae: "Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¬Ã˜Â§Ã˜Â±Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å Ã˜Â©",
    },
    {
      en: "Widgets",
      pt: "Ferramenta",
      es: "Vidin",
      fr: "Widgets",
      de: "Widgets",
      cn: "Ã¥Â°ÂÃ©Æ’Â¨Ã¤Â»Â¶",
      ae: "Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â§Ã˜Â¬Ã™Å Ã˜Â§Ã˜Âª",
    },
    {
      en: "Page layout",
      pt: "Layout da pÃƒÂ¡gina",
      es: "PaÃ„Âa aranÃ„Âo",
      fr: "Tableaux",
      de: "Mise en page",
      cn: "Ã© ÂÃ©ÂÂ¢Ã¤Â½Ë†Ã¥Â±â‚¬",
      ae: "Ã™Ë†Ã˜ÂªÃ˜Â®Ã˜Â·Ã™Å Ã˜Â· Ã˜Â§Ã™â€žÃ˜ÂµÃ™ÂÃ˜Â­Ã˜Â©",
    },
    {
      en: "Applications",
      pt: "FormulÃƒÂ¡rios",
      es: "Aplikoj",
      fr: "Applications",
      de: "Toepassingen",
      cn: "Ã¦â€¡â€°Ã§â€Â¨Ã© ËœÃ¥Å¸Å¸",
      ae: "Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€šÃ˜Â§Ã˜Âª",
    },
    {
      en: "Ready to use Apps",
      pt: "Pronto para usar aplicativos",
      es: "Preta uzi Apps",
      fr: " Applications prÃƒÂªtes Ãƒ  lemploi ",
      de: "Klaar om apps te gebruiken",
      cn: "Ã¤Â»ÂªÃ¨Â¡Â¨Ã¦ÂÂ¿",
      ae: "Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â² Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€šÃ˜Â§Ã˜Âª",
    },
  ];

  function translate(tnum) {
    for (var i = 1; i < 9; i++) {
      $(".lan-" + i).text(trans[i - 1][tnum]);
    }
  }
})(jQuery);

function toggleFullScreen() {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}


