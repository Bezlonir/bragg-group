$(document).ready(function(){
  $('.bragg-group-carousel').slick({
    accessibility:false,
    arrows:false,
    autoplay: true,
    autoplaySpeed:6000,
    draggable:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    swipe:false,
    touchMove:false
  });
  sizeIntroVid();
  sizeAboutVid();
  sizeNAAInfo();
  $(window).resize(function(){
    sizeIntroVid();
    sizeAboutVid();
    sizeNAAInfo();
  });
});

// set the size of the YouTube video
function sizeIntroVid() {
  $('.intro-video').val('');
  var introWidth = $('.intro-column').width();
  introWidth = Math.floor(introWidth* .95);
  var introHeight = Math.floor(introWidth * 0.6015625);
  var introHTML =
  '<iframe ' +
      'width="'+ introWidth +'"' +
      'height="'+ introHeight +'"' +
      'src="https://www.youtube.com/embed/MEX_SrCI4VA"' +
      'frameborder="0"' +
      'allow="autoplay; encrypted-media"' +
      'allowfullscreen></iframe>';
  $('.intro-video').html(introHTML);
};

// set the size of the YouTube video
function sizeAboutVid() {
  $('.about-video').val('');
  var aboutWidth = $('.about-column').width();
  aboutWidth = Math.floor(aboutWidth * .95);
  var aboutHeight = Math.floor(aboutWidth * 0.6015625);
  var aboutHTML =
  '<iframe ' +
      'width="'+ aboutWidth +'"' +
      'height="'+ aboutHeight +'"' +
      'src="https://www.youtube.com/embed/65F0kikq-iY"' +
      'frameborder="0"' +
      'allow="autoplay; encrypted-media"' +
      'allowfullscreen></iframe>';
  $('.about-video').html(aboutHTML);
};

// size the NAA leads info picture
function sizeNAAInfo() {
  var NAAwidth = $('.naa-pic').width();
  var NAAheight = Math.floor(NAAwidth * .725);
  $('.naa-pic').css('height', NAAheight);
}
