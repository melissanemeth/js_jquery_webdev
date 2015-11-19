// callback when JSON loads
function showEvents(data) {
  // variable to hold HTML
  var newContent = '';

  for (var = i; i < data.events.length; i++) {
    newContent += '<div class="event">';
    newContent += '<img src="' + responseObject.events[i].map + '" ';
    newContent += 'alt="' + responseObject.events[i].location + '" />';
    newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
    newContent += responseObject.events[i].date + '</p>';
    newContent += '</div>'; 
  }

  document.getElementById('content').innerHTML = newContent;
}

 /* the code in the for loop (which is used to process the JSON data
  and create the HTML) and the line that writes it into the page are
  the same as the code that processed the JSON data from the server,
  but there are 3 key differences:
  1 - it's wrapped in a function
  2 - the JSON data comes in as an argument of the function
  3 - the data does not need to be parsed 

  Instead of using a second script element in the HTML page, you
  can use JavaScript to write that script into the page just like
  any other element. That would put all the functionality for the
  external data in one JS file. */