$(function() {
  // select <p> element, store in var
  var $p = $('p');
  // copy it and it's content and child elements, store in var
  var $clonedQuote = $p.clone();
  // remove paragraph
  $p.remove();
  // insert cloned p after h2
  $clonedQuote.insertAfter('h2');
  // detach first list item and store in var (removes from list)
  var $moveItem = $('#one').detach();
  // add that list item to end of list
  $moveItem.appendTo('ul');
});