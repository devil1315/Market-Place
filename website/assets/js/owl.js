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
  responsiveClass: true,
  stagePadding: 50,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 4,
      nav: false,
    },
    1000: {
      items: 8,
      nav: true,
      loop: true,
    },
  },
});
