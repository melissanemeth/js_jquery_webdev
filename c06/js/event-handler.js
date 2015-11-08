function checkUsername() {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be at least 5 characters.';
  } else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;