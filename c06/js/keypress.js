// This example has been updated to fire on the keyup event instead of keypress 
// (on the last line in the event listener) as new text is not in the textarea until the key is released

var x;

function charCount(e) {
  var textEntered, charDisplay, counter, lastkey;
  textEntered = document.getElementById('message').value;
  charDisplay = document.getElementById('charactersLeft');
  counter = (180 - (textEntered.length));
  charDisplay.textContent = counter;
  lastkey = document.getElementById('lastKey');
  lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode || e.which; // firefox doesn't support keyCode, so use 'which'
}

x = document.getElementById('message');
x.addEventListener('keyup', charCount, false);