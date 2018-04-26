// 'use strict';

var $intro = $('.intro-video');
var $about = $('.about-video');

$.fn.scrollView = function () {
  var navHeight = $("#bg-navbar").height();
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top - navHeight + 20
    }, 300);
  });
};

$(document).ready(function () {
  // automation for carousel
  $('.bragg-group-carousel').slick({
    accessibility: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false
  });

  // size images and videos on document ready
  if ($('.intro-video').html().length <= 13){
    sizeIntroVid();
    sizeAboutVid();
    sizeNAAInfo();
    sizeInsuranceRow();
    console.log($intro);
  };



  // size images and videos on window resize
  $(window).resize(function () {
    if ($('.intro-video').width() <= ($intro.data('width') * 1.1) &&
        $('.intro-video').width() >= ($intro.data('width') * 0.9)) {
      return;
    };
    sizeIntroVid();
    sizeAboutVid();
    sizeNAAInfo();
    sizeInsuranceRow();
  });


  $(window).on("orientationchange", function(event) {
    window.setTimeout(function() {
      sizeIntroVid();
      sizeAboutVid();
      sizeNAAInfo();
      sizeInsuranceRow();
    },200);
  });

  $('.bragg-nav').click(function () {
    $('#bragg').scrollView();
  });

  $('.get-inspired-nav').click(function () {
    $('#get-inspired').scrollView();
  });

  $('.naa-about-nav').click(function () {
    $('#naa-about').scrollView();
  });

  $('.book-now-nav').click(function () {
    $('#book-now').scrollView();
  });
});

// set the size of the YouTube video
function sizeIntroVid() {
  $('.intro-video').val('');
  var introWidth = $('.intro-column').width();
  introWidth = Math.floor(introWidth * .95);
  var vidRatio = 2 / 3;
  // 0.6015625
  var introHeight = Math.floor(introWidth * 0.5625);
  var introHTML = '<iframe ' + 'width="' + introWidth + '"' + 'height="' + introHeight + '"' + 'src="https://www.youtube.com/embed/MEX_SrCI4VA&&origin=https://bezlonir.github.io/bragg-group"' + 'frameborder="0"' + 'allow="autoplay; encrypted-media"' + 'allowfullscreen></iframe>';
  $('.intro-video').html(introHTML);
  $intro.data('width', $intro.width());
};

// set the size of the YouTube video
function sizeAboutVid() {
  $('.about-video').val('');
  var aboutWidth = $('.about-column').width();
  aboutWidth = Math.floor(aboutWidth * .95);
  var aboutHeight = Math.floor(aboutWidth * 0.5625);
  var aboutHTML = '<iframe ' + 'width="' + aboutWidth + '"' + 'height="' + aboutHeight + '"' + 'src="https://www.youtube.com/embed/65F0kikq-iY&origin=https://bezlonir.github.io/bragg-group"' + 'frameborder="0"' + 'allow="autoplay; encrypted-media"' + 'allowfullscreen></iframe>';
  $('.about-video').html(aboutHTML);
  $about.data('width', $about.width());
};

// size the NAA leads info picture
function sizeNAAInfo() {
  var NAAwidth = $('.naa-pic').width();
  var NAAheight = Math.floor(NAAwidth * .725);
  $('.naa-pic').css('height', NAAheight);
}

function sizeInsuranceRow() {
  var RowWidth = $('.insurance-row').width();
  var RowHeight = Math.floor(RowWidth / 6);
  $('.insurance-row').css('height', RowHeight);
}
