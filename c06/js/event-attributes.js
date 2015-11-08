// this is an example for the old html event handler method, do not use

function checkUsername () {
  var elMsg = document.getElementById('feedback');
  var elUsername = document.getElementById('username');
  if (elUsername.value.length < 5) {
    elMsg.textContent = 'Username must be at least 5 characters.';
  } else {
    elMsg.textContent = '';
  }
}