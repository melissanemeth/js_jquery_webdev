// When users submit the form, trigger function
$('#register').on('submit', function(e) {
  // prevent the form from submitting
  e.preventDefault();
  // collect form data using serialize method, store as details
  var details = $('#register').serialize();
  /* call post method (url to send to, what to send, callback
     function to display results to user) */
  $.post('register.php', details, function(data) {
    // update register element with html data from server
    $('#register').html(data);
  });
});