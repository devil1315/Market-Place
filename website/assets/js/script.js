document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

$(window).on("load", function () {
  $("body").addClass("customclass");

  setTimeout(function () {
    $(".preloader")
      .delay(700)
      .fadeOut(700, function () {
        $("body").removeClass("customclass");
      })
      .addClass("loaded");
  }, 800);
});
