$(document).ready(function () {
  // Mobaile Menu area
  $(".logo-bars").click(function () {
    $(this).toggleClass("open");
  });
  // Mobile menu
  $(".logo-bars").click(function () {
    $(".menu ul").slideToggle(500);

    return false;
  });
  // Smoth Scroll
  $(".menu ul li a, .scrollsectionBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000
    );

    return false;
  });

  $(".our-client").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
  });
});

$(window).scroll(function () {
  var scrollValu = $(this).scrollTop();

  if (scrollValu > 200) {
    $(".header").addClass("fixed-header");
  } else {
    $(".header").removeClass("fixed-header");
  }
});
