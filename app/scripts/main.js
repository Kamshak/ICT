console.log('\'Allo \'Allo!');

$(document).ready(function() {
   $.stellar({
      horizontalScrolling: false,
   });

  var waypoint = new Waypoint({
    element: document.getElementById('navigation'),
    handler: function(direction) {
      $('.navbar-fixed-top').toggleClass('visible', direction == "down");
    }
  })

   console.log("DOne");
});
