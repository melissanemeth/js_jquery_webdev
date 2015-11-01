var saying = 'Home sweet home ';
var msg = '<h2>Uppercase</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>Lowercase</h2><p>' + saying.toLowerCase() + '</p>';
msg += '<h2>Character Index: 12</h2><p>' + saying.charAt(12) + '</p>';
msg += '<h2>First "ee"</h2><p>' + saying.indexOf('ee') + '</p>';
msg += '<h2>Last "e"</h2><p>' + saying.lastIndexOf('e') + '</p>';
msg += '<h2>Character Index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
msg += '<h2>Replace</h2><p>' + saying.replace('me', 'w') + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;