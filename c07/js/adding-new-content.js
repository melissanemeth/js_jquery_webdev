$(function() {
  // select ul element and insert new paragraph above the list
  $('ul').before('<p class="notice">Just updated</p>');
  // select all li of class hot and add a plus symbol before text
  $('li.hot').prepend('+ ');
  // create new li and add it after the last li element
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  $('li:last').after($newListItem);
});