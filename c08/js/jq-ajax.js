// When user clicks a nav link, load new content into page

// click triggers ajax method
$('nav a').on('click', function(e) {
  e.preventDefault;
  // specify url to load
  var url = this.href;
  // cache selection
  var $content = $('#content');

  // update links
  $('nav a.current').removeClass('current');
  $(this).addClass('current');
  // remove content
  $('container').remove();

  $.ajax({
    type: "POST",
    url: url,
    // wait 2 seconds for ajax response
    timeout: 2000,
    /* add elements to show data is loading, may not be seen if
       response is handled quickly */
    beforeSend: function() {
      $content.append('<div id="load">Loading...</div>');
    },
    // once finished, clear the message
    complete: function() {
      $('#loading').remove();
    },
    // show the content
    success: function(data) {
      $content.html($(data).find('#container')).hide().fadeIn(400);
    },
    // show error message if it fails
    fail: function() {
      $('#panel').html('<div class="loading">Please try again soon.</div>');
    }
  });
});