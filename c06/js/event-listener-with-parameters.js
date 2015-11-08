var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
  if (elUsername.value.length < minLength)  {
    elMsg.textContent = 'Username must be at least ' + minLength + ' characters';
  } else {
    elMsg.innerHTML = '';
  }
}

elUsername.addEventListener('blur', function() {
  checkUsername(5);
}, false);