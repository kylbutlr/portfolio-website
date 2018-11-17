
$(function(){
  $(".projects-window").hide()
  $(".background").hide().delay(1500).fadeToggle(2000)
  $(".header-div").hide().delay(500).fadeToggle(1000)
  $(".socials-div").hide().delay(500).fadeToggle(1000)

  $(".footer-button").click(function(e){
    if ($(".projects-window").is(":hidden")){
      $(".projects-window").stop().delay(500).fadeIn(1000)
      $(".footer-div").stop().animate({bottom: 0},1000)
    }
    else {
      $(".projects-window").fadeOut(500)
      $(".footer-div").stop().animate({bottom: -128},1000)
    }
  })
})