$(function() {

  var people = [
    {name: 'Casey', rate: 60},
    {name: 'Camille', rate: 80},
    {name: 'Gordon', rate: 75},
    {name: 'Nigel', rate: 120}
  ];

  // check each person and add those in range to array
  var results = [];
  people.forEach(function(person) {
    if (person.rate >= 65 && person.rate <= 90) {
      results.push(person);
    }
  });

  // loop through new array, add matching people to results table

  //create new jQuery object for table
  var $tableBody = $('<tbody></tbody>');
  // loop through the matches
  for (var i = 0; i < results.length; i++) {
    // store the current person
    var person = results[i];
    // create a row for them
    var $row = $('<tr></tr>');
    // add their name
    $row.append($('<td></td>').text(person.name));
    // add their rate
    $row.append($('<td></td>').text(person.rate));
    // add row to new content
    $tableBody.append($row);
  }

  // add the new content after the body of the page
  $('thead').after($tableBody);
});