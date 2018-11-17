
$(function(){
  $(".projects-window").hide()
  $(".background").hide().delay(1000).fadeToggle(1500)
  $(".header-div").hide().delay(500).fadeToggle(1000)
  $(".socials-div").hide().delay(500).fadeToggle(1000)
  $("h2").hide().delay(500).fadeToggle(1000)

  $(".footer-button").click(function(e){
    if ($(".projects-window").is(":hidden")){
      $(".menu-bars").addClass("full-opacity")
      $(".projects-window").stop().delay(500).fadeIn(500)
      $(".footer-div").stop().animate({bottom: 12},1000)
    } else {
      $(".menu-bars").removeClass("full-opacity")
      $(".projects-window").fadeOut(500)
      $(".footer-div").stop().animate({bottom: -110},1000)
    }
  })
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
      document.getElementById('scrollDiv').scrollLeft -= (delta*120) // (*40)
      e.preventDefault()
  }
  if (document.getElementById('scrollDiv').addEventListener) {
      document.getElementById('scrollDiv').addEventListener("mousewheel", scrollHorizontally, false) // IE9, Chrome, Safari, Opera
      document.getElementById('scrollDiv').addEventListener("DOMMouseScroll", scrollHorizontally, false) // Firefox
  } else {
      document.getElementById('scrollDiv').attachEvent("onmousewheel", scrollHorizontally) // IE 6/7/8
  }
})