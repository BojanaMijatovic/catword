// TEXTAREA
function makeExpandingArea(container) {
var area = container.querySelector('textarea');
var span = container.querySelector('span');
if (area.addEventListener) {
area.addEventListener('input', function() {
span.textContent = area.value;
}, false);
span.textContent = area.value;
} else if (area.attachEvent) {
// IE8 compatibility
area.attachEvent('onpropertychange', function() {
span.innerText = area.value;
});
span.innerText = area.value;
 }
// Enable extra CSS
container.className += ' active';
}var areas = document.querySelectorAll('.expandingArea');
var l = areas.length;while (l--) {
makeExpandingArea(areas[l]);
}

// MOBILE NAVIGATION 
$('.burger').on('click', function(event) {
  event.preventDefault();
  $('.nav').css('display', 'table');
  $('.nav').css('transform', 'translate3d(0, 0, 0)');
  $('.burger').css('display','none');
});
$('.nav .close, .nav a').on('click', function(event) {
  event.preventDefault();
  $('.nav').css('transform', 'translate3d(150%, 0, 0)');
  $('.burger').css('display','block');
});

$('.nav a').on('click', function(event) {
  $('.nav a').removeClass('active');
  $(this).addClass('active');
});


// MODAL
$('.ask').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal_1').addClass('open');
});
$('.modal .close').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal_1').removeClass('open');
});

$('.send').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal_2').addClass('open');
});
$('.modal .close').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal_2').removeClass('open');
});

$('.hire').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal_3').addClass('open');
});
$('.modal .close').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal_3').removeClass('open');
});

$(function() {
  $('.input-file > input').on('change', function(){
    var inputValue = $(this).val();
    $('.input-value').html(inputValue);
  });
});

var safari   = navigator.userAgent.indexOf("Safari") > -1;
var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
if ((chrome) && (safari)) {
safari = false;
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}

// SLIDER 
$(window).on("load", function() {
  $('.flexslider').flexslider({
    animation: "slide",
    prevText: "",
    nextText: ""
  });
});


//READ MORE BUTTON 
$('.accordion').on('click', function(){
  if ($('.dots').css('display') === 'none')  {
    $('.dots').css('display', 'inline');
    $('.accordion').html('Čitajte dalje');
    $('.hidden-text').css('display', 'none');
  } else {
    $('.dots').css('display', 'none');
    $('.accordion').html('Čitajte manje');
    $('.hidden-text').css('display', 'inline');
  }
});