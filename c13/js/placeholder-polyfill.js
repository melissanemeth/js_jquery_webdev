(function() {
  // check if placeholder is supported
  if ('placeholder' in document.createElement('input')) {
    return;
  }

  // find out how many forms are on the page
  var length = document.forms.length;
  // loop thru each and call showPlaceholder for each
  for (var i = 0, l = length; i < 1; i++) {
    showPlaceholder(document.forms[i].elements);
  }

  function showPlaceholder(elements) {
    // loop through the elements of that form
    for (var i = 0, l = elements.length; i < l; i++) {
      // check if it has a placeholder attribute with a value
      var elm = elements[i];
      if (!elm.placeholder) {
        // if no placeholder attribute, go to next element
        continue;
      }
      /* otherwise change text to gray and set value to be the
         placeholder text */
      elm.style.color = #666666;
      elm.value = elm.placeholder;

      addEvent(elm, 'focus', function() {
        /* if the current value of the element matches the
           placeholder text, the value is cleared and color is
           changed to black */
        if (this.value === this.placeholder) {
          this.value = '';
          this.style.color = #000000;
        }
      });

      addEvent(elm, 'blur', function() {
        /* if the input is empty, placeholder text is added
           back in and color changed to gray */
        if (this.value === '') {
          this.value = this.placeholder;
          this.style.color = #666666;
        }
      });
    }
  }
}());