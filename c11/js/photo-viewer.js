var request; // the latest image to be requested
var $current; // the current image shown
var cache = {}; // creates a cache object
var $frame = $('#photo-viewer'); // container for image
var $thumbs = $('.thumb'); // container for thumbnail

// create function to fade between images
function crossfade($img) {
  // if an image is currently showing, stop animation and fade out
  if ($current) {
    $current.stop().fadeOut('slow');
  }

  $img.css({
    // set negative left margin = half of image's width
    marginLeft: -$img.width()/2,
    // ditto for height
    marginTop: -$img.height()/2
  });

  // stop animation and fade in
  $img.stop().fadeTo('slow', 1);

  // new image becomes current image
  $current = $img;
}

// when a thumbnail is clicked on
$(document).on('click', '.thumb', function(e) {
  var $img;
  // store path to image
      src = this.href;
  // store path again in request
      request = src;

  e.preventDefault();

  // remove active from thumbnails, add to clicked thumbnail
  $thumbs.removeClass('active');
  $(this).addClass('active');

  // if cache contains this image
  if (cache.hasOwnProperty(src)) {
    // and if isLoading is false
    if (cache[src].isLoading === false) {
      // call crossfade
      crossfade(cache[src].$img);
    }
  } else {
    // store empty <img/> element in $img
    $img = $('<img/>');
    // store this img in the cache
    cache[src] = {
      // add the path to the img
      $img: $img,
      // set isLoading to true
      isLoading: true
    };

    // next few lines will run when img has loaded but are prepared first
    $img.on('load', function() {
      // hide img when it has loaded
      $img.hide();
      // remove is-loading class, append new img to it
      $frame.removeClass('is-loading').append($img);
      // update isLoading in cache
      cache[src].isLoading = false;
      // if it's still the most recently requested img
      if (request === src) {
        crossfade($img);
      } // solves asynchronous loading issue
    });

    // add is-loading to frame
    $frame.addClass('is-loading');

    // set attributes on <img> element
    $img.attr({
      'src': src,
      // add title if one was given
      'alt': this.title || ''
    });

  }

});

// last line runs once (when rest of script has loaded) to show first image
$('thumb').eq(0).click(); // this simulates click on first thumbnail