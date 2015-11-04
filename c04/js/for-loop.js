var scores = [24, 32, 17];
var arrayLength = scores.length;
var testNumber = 0;
var msg = '';
var i;

for (i = 0; i < arrayLength; i++) {
  testNumber = (i + 1);
  msg += 'Test ' + testNumber + ': ';
  msg += scores[i] + '<br/>';  // this gets the scores from the array
}

document.getElementById('answer').innerHTML = msg;