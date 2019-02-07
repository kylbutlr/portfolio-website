$(function() {
  $('.projects-window').hide();
  $('.background')
    .hide()
    .delay(1000)
    .fadeToggle(3000);
  $('.header-div')
    .hide()
    .delay(500)
    .fadeToggle(1500);
  $('.socials-div')
    .hide()
    .delay(500)
    .fadeToggle(1500);
  setTimeout(function() {
    if ($('.projects-window').is(':hidden')) {
      $('.footer-button').trigger('click');
    }
  }, 3000);

  $('.email').on('click', function() {
    let $temp = $('<input>');
    $('body').append($temp);
    $temp.val($('.email').text()).select();
    document.execCommand('copy');
    $temp.remove();
    if ($('.copied').hasClass('full-opacity') === false) {
      let tempTimeout;
      $('.copied').addClass('full-opacity');
      $('.socials-div').mouseleave(function() {
        $('.copied').removeClass('full-opacity');
        $('.socials-div').off('mouseleave');
        clearTimeout(tempTimeout);
      });
      tempTimeout = setTimeout(function() {
        $('.copied').removeClass('full-opacity');
        $('.socials-div').off('mouseleave');
      }, 4000);
    }
  });

  $('.email').hover(function() {
    if ($('.copytip').hasClass('full-opacity') === false) {
      let tempTimeout;
      $('.email').mouseleave(function() {
        $('.email').off('mouseleave');
        clearTimeout(tempTimeout);
        $('.copytip').removeClass('full-opacity');
      });
      tempTimeout = setTimeout(function() {
        $('.copytip').addClass('full-opacity');
        setTimeout(function() {
          $('.email').off('mouseleave');
          $('.copytip').removeClass('full-opacity');
        }, 3000);
      }, 2000);
    }
  });

  $('.footer-button').on('click', function() {
    if ($('.projects-window').is(':hidden')) {
      $('.menu-bars').addClass('full-opacity');
      $('.projects-window')
        .stop()
        .delay(500)
        .fadeIn(500);
      $('.footer-div')
        .stop()
        .animate({ bottom: 12 }, 750);
      setTimeout(function() {
        $('.menu-bars').removeClass('full-opacity');
      }, 750);
    } else {
      $('.menu-bars').addClass('full-opacity');
      $('.projects-window').fadeOut(500);
      $('.footer-div')
        .stop()
        .animate({ bottom: -100 }, 750);
      setTimeout(function() {
        $('.menu-bars').removeClass('full-opacity');
      }, 750);
    }
  });

  function scrollHorizontally(e) {
    e = window.event || e;
    let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.getElementById('scrollDiv').scrollLeft -= delta * 120; // (*40)
    e.preventDefault();
  }
  if (document.getElementById('scrollDiv').addEventListener) {
    document
      .getElementById('scrollDiv')
      .addEventListener('mousewheel', scrollHorizontally, false); // IE9, Chrome, Safari, Opera
    document
      .getElementById('scrollDiv')
      .addEventListener('DOMMouseScroll', scrollHorizontally, false); // Firefox
  } else {
    document
      .getElementById('scrollDiv')
      .attachEvent('onmousewheel', scrollHorizontally); // IE 6/7/8
  }
});
