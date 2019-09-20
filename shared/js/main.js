$(function() {
  $('.primary-menu > li.active > a').hover(function() {
    $('.sub-menu').addClass('active');
  });
  $('.primary-menu > li:not(.active) > a').hover(function() {
    $('.sub-menu').removeClass('active');
  });
  $('.sub-menu').hover(function() {
    $(".sub-menu").addClass('subactive');
  }, function() {
    $(".sub-menu").removeClass("active");
  });
  $('.slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});