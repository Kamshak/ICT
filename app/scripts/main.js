console.log('\'Allo \'Allo!');

$(document).ready(function() {
   $.stellar({
      horizontalScrolling: false,
   });

   var sticky = new Waypoint.Sticky({
      element: $('#navigation')[0]
   });
   console.log(sticky);

   console.log("DOne");
});