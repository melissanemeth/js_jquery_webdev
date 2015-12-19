(function() {
  var form, options, other, otherText, hide;
  form = document.getElementById('how-heard');
  options = form.elements.heard; // radio buttons
  other = document.getElementById('other'); // other radio button
  otherText = document.getElementById('other-text');
  // hide text input
  otherText.className = 'hide';

  // add event listener to each radio button, call radioChanged when clicked
  for (var i = [0]; i < options.length; i++) {
    addEvent(options[i], 'click', radioChanged);
  }

  function radioChanged() {
    // if other is checked, set hide variable to blank string
    hide = other.checked ? '' : 'hide';
    /* The hide variable is used to set the value of the class
       attribute on the text input. If blank, the other option
       is shown, if it has a value of hide, the text is hidden. */
    otherText.className = hide;
    /* if the hide attribute has a value of hide, empty contents
       of text input */
    if (hide) {
      otherText.value = '';
    }
  }
}());