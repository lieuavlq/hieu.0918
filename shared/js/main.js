$(function() {
  $('.primary-menu > li.active > a').hover(function() {
    $('.sub-menu').addClass('active');
  });
  $('.primary-menu > li:not(.active) > a').hover(function() {
    $('.sub-menu').removeClass('active');
  });
  $('.sub-menu').hover(function() {
    $('.sub-menu').addClass('subactive');
  }, function() {
    $('.sub-menu').removeClass('active');
  });
  $('.slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: false
  });
  $('.pro-list img').one('load', function() {
    $('.mh').matchHeight();
    $('.pro-list a').matchHeight();
    $('.pro-list .img').matchHeight();
  }).each(function() {
    if(this.complete) {
      $(this).load();
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.header-navigation').offset().top) {
      $('.header-navigation').addClass('active');
    } else {
      $('.header-navigation').removeClass('active');
    }
  });
  $('.header-btn').click(function() {
    $('.header-menusp').addClass('active');
  });
  $('.header-btn-close').click(function() {
    $('.header-menusp').removeClass('active');
  });
  $('.header-menusp .hld').click(function(e) {
    e.stopPropagation();
  });
  $('.header-menusp').click(function() {
    $('.header-menusp').removeClass('active');
  });
  $('.pro-filter').click(function() {
    $(this).stop().toggleClass('active');
    $('.pro-side').stop().toggleClass('active');
  });
});