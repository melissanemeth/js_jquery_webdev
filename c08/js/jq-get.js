// Users vote for their favorite t-shirt without leaving the page

// If users click on a t-shirt, function is triggered
$('#selector a').on('click', function(e) {
  // prevent the link from opening a new page
  e.preventDefault();
  // User's choice is the value of the image id, store as queryString
  var queryString = 'vote=' + event.target.id;
  /* Call $.get() method. votes.php is the page that will handle
     the request (on the same server). queryString is the data
     sent to the server. An anonymous function handles the result
     that the server sends back. */  
  $.get('votes.php', queryString, function(data) {
    /* Select the element that held the t-shirt, replace it with
       html sent back from the server. */
    $('#selector').html(data);
  });
});

// This won't work locally, it will only work on a server