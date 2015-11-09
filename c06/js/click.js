// create the html for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. EST';
msg += 'During this time, there may be minor interruptions to service.</div>';

var note = document.createElement('div'); // create a new element
note.setAttribute('id', 'note'); // give the element an id
note.innerHTML = msg; // add the message
document.body.appendChild(note); // add it to the page

function dismissNote() {
  document.body.removeChild(note);
}

var close = document.getElementById('close');
close.addEventListener('click', dismissNote, false);