// the html method only returns the contents of the first li
var $listItemHTML = $('li').html();

// add it after each li element
$('li').append('<i>' + $listItemHTML + '</i>');