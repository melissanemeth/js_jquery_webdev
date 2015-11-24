var map = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location.';

// Modernizer checks if geoloction is supported by browser
if (Modernizer.geolocation) {
  // ask user for permission to get their location
  navigator.geolocation.getCurrentPosition(success, fail);
  map.textContent = 'Checking location...';
} else {
  // if geolocation is not supported, show error message
  map.textContent = msg;
}

// if user gives location, write lat/long into page
function success(position) {
  msg = '<h3>Longitude:<br>';
  msg += position.coords.longitude + '</h3>';
  msg += '<h3>Latitude:<br>';
  msg += position.coords.latitude + '</h3>';
  map.innerHTML = msg;
}

// if location is not gained for any reason, give error message
function fail(msg) {
  map.textContent = msg;
  // log error code in the browser console
  console.log(msg.code);
}