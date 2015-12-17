$(function() {

  var people = [
    {name: 'Casey', rate: 60},
    {name: 'Camille', rate: 80},
    {name: 'Gordon', rate: 75},
    {name: 'Nigel', rate: 120}
  ];

  // create a function to act as a filter
  function priceRange(person) {
    return (person.rate >= 65) && (person.rate <= 90);
  };

  // filter the people array and add matches to results array
  var results = [];
  results = people.filter(priceRange);

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