var username, noteName, textEntered, target;

noteName = document.getElementById('noteName');

function writeLabel(e) {
  // if event object is not present, use IE5-8 fallback
  if (!e) {
    e = window.event;
  }
  target = event.target || event.srcElement;  // get target of event
  textEntered = e.target.value;  // get value
  noteName.textContent = textEntered; // update note text
}

// functions for record and pause

if (document.addEventListener) {  // if event listener is supported
  document.addEventListener('click', function(e) { // for any click
    recorderControls(e); // call recorderControls
  }, false);  // capture in bubble phase
  // if input event fires on username input, call writeLabel
  username.addEventListener('input', writeLabel, false);
} else { // IE fallback
  document.attachEvent('onclick', function(e) {
    recorderControls(e);
  });
  // if keyup event fires on username input call writeLabel
  username.attachEvent('onkeyup', writeLabel, false):
}

function recorderControls(e) {
  if (!e) {
    e = window.event;
  }
  target = event.target || event.srcElement;
  if (e.preventDefault) {  // if preventDefault is supported, stop default action
    e.preventDefault();
  } else { // IE fallback
    event.returnValue = false;
  }
}

switch(target.getAttribute('data-state')) {
  case 'record':
    record(target);
    break;
  case 'stop':
    stop(target);
    break;
}

function record(target) {
  target.setAttribute('data-state', 'stop');
  target.textContent = 'stop';
}

function stop(target) {
  target.setAttribute('data-state', 'record');
  target.textContent = 'record';
}