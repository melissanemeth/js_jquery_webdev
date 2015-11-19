// lines 6 and 23 commented out so it works locally

var xhr = new XMLHttpRequest();

xhr.onload = function() {
  // if(xhr.status === 200) {
    // this takes the string from the server and converts it to javascript
    responseObject = JSON.parse(xhr.responseText);

    // build up string with new content
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) {
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // update page with the new content
    document.getElementById('content').innerHTML = newContent;
  // }
};

// prepare the request
xhr.open('GET', 'data/data.json', true);
// send the request
xhr.send(null);