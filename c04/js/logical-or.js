var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

// check if user passed one of the 2 rounds, store result
var minPass = ((score1 >= pass1) || (score2 >= pass2));

var msg = 'Retake required: ' + !(minPass);

var el = document.getElementById('answer');
el.textContent = msg;