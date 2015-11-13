$(function() {
  $('li').on('click', function(eventObject) {
    // remove any span elements from li elements
    $('li span').remove();
    // create new date object, set to time when event was clicked
    var date = new Date();
    date.setTime(eventObject.timeStamp);
    // convert time to readable date
    var clicked = date.toDateString();
    // write the date the item was clicked into the list item
    $(this).append('<span class="date">' + clicked + ' ' + eventObject.type + '</span>');
  });
});

// timeStamp does not display in Firefox