// get text from all ul children
var $listText = $('ul').text();

// add the text to the end of the ul
$('ul').append('<p>' + $listText + '</p>');