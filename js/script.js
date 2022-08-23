$(document).ready(function() {
  var imgs = 2;
  var now = 0;

  start();

  function start() {
    $(".imgSlide > a").eq(0).siblings().animate({width:"-1920px"});

    setInterval(function() {
      now = now == imgs ? 0 : now += 1;
      $(".imgSlide > a").eq(now - 1).animate({width:"-1920px"});
      $(".imgSlide > a").eq(now).animate({width:"1920px"});
    }, 5000);
  }
});