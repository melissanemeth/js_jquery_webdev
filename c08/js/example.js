// When DOM is loaded, run.
$(function() {
  // the times variable will store the session timetables for all events
  var times;
  $.ajax({
    beforeSend: function(xhr) {
      /* Before requesting data, check if overrideMimeType is supported.
         This is used to indicate the response from the server should be
         JSON data. This is used in case the server is accidentally set up
         to indicate that the data is being returned in any other format. */
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    }
  });

  // this function gets json data
  function loadTimetable() {
    $.getJSON('data/example.json')
    .done( function(data){
      // if successful, store it in a variable
      times = data;
      // if there's an error, show a message
    }).fail( function() {
      $('#event').html('Sorry! We could not load the timetable right now.');
    });
  }
  // call function to load the data
  loadTimetable();

  // click on a place to load the timetable
  $('#content').on('click', '#event a', function(e) {
    e.preventDefault();
    // get id of element, make uppercase
    var loc = this.id.toUpperCase();

    // build up timetable by looping thru events
    var newContent = '';
    for (var i = 0; i < times[loc].length; i++) {
      // store each session in li, display time of session
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      // add link to timetable (the # links to correct part of page)
      newContent += '<a href="descriptions.html#';
      /* title is added after the # symbol, replace spaces in the
         title with a dash to match the id in the descriptions.html
         file for each session */
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      // inside the link you can see the title of the session
      newContent += times[loc][i].title + '</a></li>';
    }

    // display times
    $('#sessions').html('<ul>' + newContent + '</ul>');

    // update selected item to show which is current
    $('#event a.current').removeClass('current');
    $(this).addClass('current');

    // clear the third column
    $('#details').text('');
  });

  // click a session to load the description
  $('#content').on('click', '#sessions li a', function(e) {
    e.preventDefault();
    // hold link to session, collected from href that was clicked
    var fragment = this.href;

    /* add space after # so it's the correct format for jQuery 
       load() method to collect part (not all) of the page */
    fragment = fragment.replace('#', ' #');
    // load info
    $('#details').load(fragment);
    // update links so they highlight the session in middle column
    $('#sessions a.current').removeClass('current');
    $(this).addClass('current');
  });

  // set up main navigation
  $('nav a').on('click', function(e) {
    e.preventDefault();
    // get the url to load
    var url = this.href;
    // update the nav
    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    // remove old content
    $('#container').remove();
    // add new content, hide so it can fade in
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  });

});