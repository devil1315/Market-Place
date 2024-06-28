$(".store-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  dots: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: true,
    },
    600: {
      items: 1,
      nav: false,
      dots: true,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
      dots: true,
    },
  },
});

$(".gold-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});
$(".simple-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});
$(".open-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});
$(".review-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});
$(".premium-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  smartSpeed: 800,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 4,
      nav: true,
    },
    1000: {
      items: 8,
      nav: true,
      loop: true,
      stagePadding: 50,
    },
  },
});
$(".account-store-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: true,
    },
  },
});

$(document).ready(function () {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4;
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: true,
      loop: false,
      responsiveRefreshRate: 200,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2.find(".owl-item").eq(0).addClass("current active-border");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: true,
      nav: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage,
      responsiveRefreshRate: 100,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item img", function (e) {
    e.preventDefault();
    // Remove the custom class from all .owl-item
    sync2.find(".owl-item").removeClass("active-border");
    // Add the custom class to the closest .owl-item
    $(this).closest(".owl-item").addClass("active-border");
    // Navigate to the clicked item's index
    var number = $(this).closest(".owl-item").index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});

// thumbnail
