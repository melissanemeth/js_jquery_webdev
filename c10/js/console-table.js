var contacts = {
  "London": {
    "Tel": "+44 (0)207 946 0128",
    "Country": "UK"},
  "Sydney": {
    "Tel": "+61 (0)2 7010 1212",
    "Country": "Australia"},
  "New York": {
    "Tel": "+1 (0)1 555 2104",
    "Country": "USA"}
};

/* console.table lets you output a table showing objects and
   arrays that contain other objects or arrays */ 
console.table(contacts);

var city, contactDetails;
contactDetails = '';

// loop through data
$.each(contacts, function(city, contacts) {
  contactDetails += city + ': ' + contacts.Tel + '<br/>';
});

// add data to page
$('h2').after('<p>' + contactDetails + '</p>');