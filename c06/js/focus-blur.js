function checkUsername() {
  var username = x.value;
  if (username.length < 5) {
    msg.className = 'warning';
    msg.textContent = 'Not long enough, yet...';
  } else {
    msg.textContent = '';
  }
}

function tipUsername() {
  msg.className = 'tip';
  msg.innerHTML = 'Username must be at least 5 characters.';
}

var x = document.getElementById('username');
var msg = document.getElementById('feedback');

x.addEventListener('focus', tipUsername, false);
x.addEventListener('blur', checkUsername, false);