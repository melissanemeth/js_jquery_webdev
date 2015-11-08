var username = document.getElementById('username');
var msg = document.getElementById('feedback');

function checkUsername(minLength) {
  if (username.value.length < minLength) {
    msg.innerHTML = 'Username must be at least ' + minLength + ' characters.';
  } else {
    msg.innerHTML = '';
  }
}

if (username.addEventListener) {
  username.addEventListener('blur', function() {
    checkUsername(5);
  }, false);
} else {
  username.attachEvent('onblur', function() {
    checkUsername(5);
  });
}