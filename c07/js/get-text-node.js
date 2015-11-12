// get the text from each li element
var $listItemText = $('li').text();

// add after each li element
$('li').append('<i>' + $listItemText + '</i>');