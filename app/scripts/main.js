$(document).ready(function() {
  // Initialize Stellar Library (parallax backgrounds)
   $.stellar({
      horizontalScrolling: false,
      responsive: true
   });

   // Show menu once scrolled past
  var waypoint = new Waypoint({
    element: document.getElementById('navigation'),
    handler: function(direction) {
      $('.navbar-fixed-top').toggleClass('visible', direction == "down");
    }
  });

  // Add active class to header on scrolling past section
  $('section').each(function(index, element) {
    return;
    var menuWaypoint = new Waypoint({
      element: element,
      handler: function(direction) {
        console.log(element, direction, "[href=#" + element.name + "]");
        $('.navbar-nav').children().toggleClass('active', false);
        var link = $('.navbar-nav').find("[href=#" + element.attributes.name.value + "]");
        console.log(link);
        link.parent().toggleClass('active', true);
      }
    });
  });

  // Responsive parallax backgrounds
  var fakeListenerParallax;
  fakeListenerParallax = setInterval((function() {
    $('[data-stellar-background-ratio]').each(function() {
      var ofs;
      ofs = $(this).offset().top * $(this).data("stellar-background-ratio");
      ofs = -ofs;
      ofs = ofs + $(window).scrollTop() * 0.5;
      $(this).css("background-position", "0px " + ofs + "px");
    });
  }), 15);

  setTimeout((function() {
    clearInterval(fakeListenerParallax);
  }), 200);

  // Initialize smooth scroll
  smoothScroll.init({
    selector: '[data-pagelink]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
  });

  // Close the menu after clicking
  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
  });
});
