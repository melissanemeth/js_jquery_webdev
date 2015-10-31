var msg = '<h2>Browser Window</h2> <p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';

msg += '<h2>History</h2> <p>items: ' + window.history.length + '</p>';
msg += '<h2>Screen</h2> <p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

alert('Current page: ' + window.location);