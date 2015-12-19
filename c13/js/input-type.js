(function() {
  // get password input and checkbox
  var pwd = document.getElementById('pwd');
  var chkbx = document.getElementById('showPwd');

  // when user clicks checkbox, get that element
  addEvent(chkbx, 'change', function(e) {
    // e.target for most browsers, e.srcElement for old IE
    var target = e.target || e.srcElement;
    try {
      if (target.checked) {
        pwd.type = 'text'; // to show password
      } else {
        pwd.type = 'password' // to hide password
      }
    // if trying to change the type causes an error, alert
    } catch(error) {
      alert('This browser cannot switch type.');
    }
  });
}());