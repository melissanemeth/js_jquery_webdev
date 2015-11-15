$(function() {

  // first create jQuery objects
  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');

  // this is what shows when the page first loads
  $newItemButton.show();
  $newItemForm.hide();

  // if new item button is clicked, button is hidden and form is shown
  $('#showForm').on('click', function() {
    $newItemButton.hide();
    $newItemForm.show();
  });

  // when the form is submitted, a function is called
  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    // select the text input and get it's value
    var newText = $textInput.val();
    // add new item to end of list
    $('li:last').after('<li>' + newText + '</li>');
    // form is hidden and button is shown again
    $newItemForm.hide();
    $newItemButton.show();
    // content of text input is emptied a new value can be input
    $textInput.val('');
  });

});