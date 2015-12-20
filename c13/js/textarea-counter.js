(function() {
  var bio = document.getElementById('bio');
  var bioCount = document.getElementById('bio-count');

  // when element gains focus or input, run updateCounter
  addEvent(bio, 'focus', updateCounter);
  addEvent(bio, 'input', updateCounter);

  // when they leave the bio element, hide the count
  addEvent(bio, 'blur', function() {
    if (bio.value.length <= 140) {
      bioCount.className = 'hide';
    }
  });

  // this updates the character count
  function updateCounter(e) {
    var target = e.target || e.srcElement;
    var count = 140 - target.value.length;
    if (count < 0) {
      bioCount.className = 'error';
    } else if (count <= 15) {
      bioCount.className = 'warn';
    } else {
      bioCount.className = 'good';
    }

    // this shows the user how many characters are left
    var charMsg = '<b>' + count + '</b>' + ' characters';
    bioCount.innerHTML = charMsg;
  }
}());