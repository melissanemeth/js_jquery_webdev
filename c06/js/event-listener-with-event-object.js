function checkLength(e, minLength) {
  var el, msg;
  // If event object doesn't exist, use IE fallback
  if (!e) {
    e = window.event;
  }
  el = e.target || e.srcElement;
  msg = el.nextSibling;

  if (el.value.length < minLength) {
    msg.innerHTML = 'Username must be at least ' + minLength + ' characters.';
  } else {
    msg.innerHTML = '';
  }
}

var userName = document.getElementById('username');
// check if event listener is supported
if (userName.addEventListener) { 
  userName.addEventListener('blur', function(e) {
    checkLength(e, 5);
  }, false); // remember fals means to capture in bubble phase
} else { // else use IE fallback
  userName.attachEvent('onblur', function(e) {
    checkLength(e, 5);
  });
}