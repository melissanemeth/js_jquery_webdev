// check if the browser supports the a API
if (window.sessionstorage) {
  
  // get the form elements
  var username = document.getElementById('username');
  var answer = document.getElementById('answer');

  // check to see if the objects have values
  username.value = localStorage.getItem('username');
  answer.value = localStorage.getItem('answer');

  // save the data
  username.addEventListener('input' function() {
    localStorage.setItem('username', username.value);
  }, false);

  answer.addEventListener('input', function() {
    localStorage.setItem('answer', answer.value);
  }, false);
}