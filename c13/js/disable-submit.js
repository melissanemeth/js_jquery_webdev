(function() {
  var form = document.getElementById('newPwd');
  var password = document.getElementById('pwd');
  var submit = document.getElementById('submit');

  //flag to remember if form has been submitted yet
  var submitted = false;

  /* disable and style submit button so form can still be
     used if a user has javascript disabled */
  submit.disabled = true;
  submit.className = 'disabled';

  // on input, check whether or not to enable submit button
  addEvent(password, 'input', function(e) {
    var target = e.target || e.srcElement;
    submit.disabled = submitted || !target.value;
    /* if the password input has a value, enable submit button
       and update style */
    submit.className = (!target.value || submitted) ? 'disabled' : 'enabled';
  });

  // on submit, disable form so it can't be submitted again
  addEvent(form, 'submit', function(e) {
    if (submit.disabled || submitted) { // if disabled or sent
      e.preventDefault();               // stop form submission
      return;                           // stop processing function
    }
    // otherwise disable submit button, update var and style
    submit.disabled = true;
    submitted = true;
    submit.className = 'disabled';

    /* demo purposes only: what would have been sent and show
       submit is disabled */
    e.preventDefault();
    alert('Password is ' + password.value);
  });
}());