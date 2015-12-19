(function() {
  var form = document.getElementById('interests'); // get form
  var elements = form.elements;  // get all form elements
  var options = elements.genre;  // get all genres from array
  var all = document.getElementById('all'); // get 'all' checkbox

  function updateAll() {
    // loop thru checkboxes and update checked property
    for (var i = 0; i < options.length; i++) {
      options[i].checked = all.checked;
    }
  }
  // add event listener
  addEvent(all, 'change', updateAll);

  // get target, if not checked then uncheck 'all' checkbox
  function clearAllOption(e) {
    var target = e.target || e.srcElement;
    if (!target.checked) {
      all.checked = false;
    }
  }

  for (var i = 0; i < options.length; i++) {
    addEvent(options[i], 'change', clearAllOption);
  }
}());