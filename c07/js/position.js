$(function() {
  // cache the window and advert
  var $window = $(window);
  var $slideAd = $('#slideAd');
  // calculate height of end zone and store
  var endZone = $('#footer').offset().top - $window.height() - 500;

  // when user scrolls up or down, function is triggered
  $window.on('scroll', function() {
    /* check if the user's position is further from top of page
       than start of end zone */
    if (endZone < $window.scrollTop()) {
      // if true, the ad slides in from the right, takes 250 ms
      $slideAd.animate({'right': '0px'}, 250);
    } else {
      /* if false or in the middle of animating, it's stopped.
         Ad then slides off to right, takes 250 ms */
      $slideAd.stop(true).animate({'right': '-360px'}, 250);
    }
  });
});

