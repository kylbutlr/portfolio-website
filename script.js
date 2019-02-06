$(function(){
  $(".projects-window").hide();
  $(".background").hide().delay(1000).fadeToggle(3000);
  $(".header-div").hide().delay(500).fadeToggle(1500);
  $(".socials-div").hide().delay(500).fadeToggle(1500);
  setTimeout(function() {
    $(".footer-button").trigger('click');
  }, 3000);

  $(".footer-button").on("click", function(){
    if ($(".projects-window").is(":hidden")){
      $(".menu-bars").addClass("full-opacity");
      $(".projects-window").stop().delay(500).fadeIn(500);
      $(".footer-div").stop().animate({bottom: 12},750);
    } else {
      $(".menu-bars").removeClass("full-opacity");
      $(".projects-window").fadeOut(500);
      $(".footer-div").stop().animate({bottom: -100},750);
    }
  });
  
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.getElementById('scrollDiv').scrollLeft -= (delta*120); // (*40)
      e.preventDefault();
  }
  if (document.getElementById('scrollDiv').addEventListener) {
      document.getElementById('scrollDiv').addEventListener("mousewheel", scrollHorizontally, false); // IE9, Chrome, Safari, Opera
      document.getElementById('scrollDiv').addEventListener("DOMMouseScroll", scrollHorizontally, false); // Firefox
  } else {
      document.getElementById('scrollDiv').attachEvent("onmousewheel", scrollHorizontally); // IE 6/7/8
  }
});