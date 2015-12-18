(function() {
  var form = document.getElementById('login');

  // addEvent is the function in the utilities file
  addEvent(form, 'submit', function(e) {
    e.preventDefault();
    var elements = this.elements;
    var username = elements.username.value;
    var msg = "Welcome " + username;
    document.getElementById('main').textContent = msg;
  });
}());

/* If you were going to use the DOM nodes again, it's helpful
   to cache them.

  var form = document.getElementByid(' login') ;
  var el ements = form.elements;
  var el Username = elements.username;
  var elMain = document .getElementByld('main');
  addEvent (form, 'submit', function (e) {
    e.preventDefault();
    var msg = ' Welcome ' + el Username.value;
    el Main.textContent = msg;
  });

*/