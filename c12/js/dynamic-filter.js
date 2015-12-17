(function() {
  // store each person as an object in an array
  var people = [
    { name: 'Casey',rate: 60 },
    { name: 'Camille', rate: 80 },
    { name: 'Gordon', rate: 75 },
    { name: 'Nigel', rate: 120 }
  ];

  // create rows array with min and max inputs
  var rows = [];
    $min = $('#value-min'),
    $max = $('#value-max'),
    $table = $('#rates');

  // create table rows and the array
  function makeRows() {
    people.forEach(function(person) {
      var $row = $('<tr></tr>');
      $row.append( $('<td></td>').text(person.name));
      $row.append( $('<td></td>').text(person.rate));
      // add an object to cross reference people and rows
      rows.push({
        person: person,
        $element: $row 
      });
    });
  }

  function appendRows() {
    // create tbody element
    var $tbody = $('<tbody></tbody>');
    // add html for each row
    rows.forEach(function(row) {
      $tbody.append(row.$element);
    });
    // add the rows to the table
    $table.append($tbody);
  }

  // update table content
  function update(min, max) {
    // show if in range, hide if now
    rows.forEach(function(row) {
      if (row.person.rate >= min && row.person.rate <= max) {
        row.$element.show();
      } else {
        row.$element.hide();
      }
    });
  }

  // tasks when script first runs
  function init() {
    // set up slide control
    $('#slider').noUiSlider({
      range: [0, 150], start: [65, 90], handles: 2, margin: 20,
      connect: true, serialization: {to: [$min, $max],
      resolution: 1}
    }).change(function() {
      update($min.val(), $max.val());
    });
    makeRows();
    appendRows();
    update($min.val(), $max.val());
  }
  $(init);
}());