/* Couldn't get the example in the book to work, so I went
to the Google Maps API site and followed their directions.
Assuming the API has changed since the book was written. */

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.782710, lng: -73.965310},
    scrollwheel: false,
    zoom: 13
  });
}

window.onload = initMap;


/*
// init loads the map into the page
function init() {
  var mapOptions = {
    center: new google.maps.LatLng(40.782710, -73.965310),
    mapTypeId: google.maps.mapTypeId.ROADMAP,
    zoom: 13
  };

  var venueMap;
  // Map() draws the map. First parameter is the element to put the map in.
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// create a script to load the Google Maps API
function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?
                      sensor=false&callback=initialize';
  // add the element to the page
  document.body.appendChild(script);
}

// when the page loads, run loadScript
window.onload = loadScript;
*/

