var originalNumber = 11.022015;

var msg = '<h2>Original Number</h2><p>' + originalNumber + '</p>';
msg += '<h2>Rounded to 3 Decimal Places</h2>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2>Rounded to 3 Digits</h2>' + originalNumber.toPrecision(3) + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
