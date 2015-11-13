$(function() {
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',  // trigger on mouseover or click
    ':not(#four)',  // filter out element of id four
    {status: 'important'},  // additional data used by the event handler
    /* the event handler uses the event object to display the 
       content of the element, the info from the data passed into the
       function, and the event type */
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br/>';
      itemStatus = 'Status: ' + e.data.status + '<br/>';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});