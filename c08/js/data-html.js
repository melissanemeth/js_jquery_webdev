// Create XMLHttpRequest
var xhr = new XMLHttpRequest();

// when the response has loaded
xhr.onload = function() {
  // this will not work locally, only on a server
  if(xhr.status === 200) {
    // update page content
    document.getElementById('content').innerHTML = xhr.responseText;
  }
};

/* prepare request - GET or POST, path to page that will handle the
   request, and whether the request is asynchronous */
xhr.open('GET', 'data/data.html', true);
/* send request - send requires an argument to be passed, if there 
   isn't one, you can use null. */
xhr.send(null);