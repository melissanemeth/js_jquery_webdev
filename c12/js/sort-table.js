// declare compare object and method called name
var compare = {
  name: function(a, b) {
    /* regex to remove the word 'The'. The string you're looking
       for is between the slashes. The caret indicates it must
       be at the start of the sting. The space after it indicates
       there must be a space after it. The i indicates that the
       test is case insensitive. */
    a = a.replace(/^the /i, '');
    b = b.replace(/^the /i, '');

    if (a < b) {
      return -1;
    } else {
      /* Ternary operator: evaluates condition and returns
         one of two values. Condition to be evaluated is left
         of question mark. If true, returns value before colon.
         If false, returns value after color. */
      return a > b ? 1 : 0;
    }
  },
  // add duration method, stored in minutes and seconds mm:ss
  duration: function(a, b) {
    /* split splits the string at colon, creates array with
       minutes and seconds as separate entries */
    a = a.split(':');
    b = b.split(':');

    /* Number converts the strings in the arrays to numbers.
       Minutes are multiplied by 60 and added to the number
       of seconds. */
    a = Number(a[0]) * 60 + Number(a[1]);
    b = Number(b[0]) * 60 + Number(b[1]);

    return a - b;
  },

  // add date method, create new Date objects to hold the date
  date: function(a, b) {
    a = new Date(a);
    b = new Date(b);

    return a - b;
  }
};

// for each element with class sortable, run function
$('.sortable').each(function() {
  var $table = $(this);
  var $tbody = $table.find('tbody');
  var $controls = $table.find('th');
  // put each row into an array
  var rows = $tbody.find('tr').toArray();

  // add event handler for when users click on header
  $controls.on('click', function() {
    var $header = $(this);
    // store value of heading in a variable called order
    var order = $header.data('sort');
    var column;

    /* if header already has ascending or decending class,
       switch it */
    if ($header.is('.ascending') || $header.is('.decending')) {
      $header.toggleClass('ascending decending');
      // then reverse the array
      $tbody.append(rows.reverse());
    } else {
      $header.addClass('ascending');
      $header.siblings().removeClass('ascending decending');
      /* If the compare object has a method that matches the
         value of the data-type attribute for this column */
      if (compare.hasOwnProperty(order)) {
        // get the column number, store in column variable
        column = $controls.index(this);

        // sort rows (compares 2 at a time)
        rows.sort(function(a, b) {
          /* find gets td elements for that row, eq looks for
             the cell whose index number matches the column
             variable, text gets the text from that cell */
          a = $(a).find('td').eq(column).text();
          b = $(b).find('td').eq(column).text();
          /* compare object is used to compare a and b using
             the order variable created above */
          return compare[order](a, b);
        });

        // append the rows to the table body
        $tbody.append(rows);
      }
    }
  });
});