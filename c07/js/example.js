$(function() {

  var $list, $newItemForm, $newItemButton;
  var item = '';                                  // item is an empty string
  $list = $('ul');                                // cache the ul
  $newItemForm = $('newItemForm');                // cache the form
  $newItemButton = $('newItemButton');            // cache button to show form

  $('li').hide().each(function(index) {           // hide list items
    $(this).delay(450 * index).fadeIn(1600);      // then fade them in
  });

  function updateCount() {
    var items = $('li[class!=complete]').length;  // get number of items in list
    $('#counter').text(items);                    // add them to counter
  }
  updateCount();

  $newItemButton.show();
  $newItemForm.hide();
  $('#showForm').on('click', function() {
    $newItemButton.hide();
    $newItemForm.show();
  });

  $newItemForm.on('submit', function(e) {       // when a new item is submitted
    e.preventDefault();                         // prevent form from being submitted
    var text = $('input:text').val();           // get value of text input
    $list.append('<li>' + text + '</li>');      // add item to end of list
    $('input:text').val('');                    // empty the text input 
    updateCount();                              // update count
  });

  $list.on('click', 'li', function() {
    var $this = $(this);                        // cache element in jQuery object
    var complete = $this.hasClass('complete');  // get complete items

    if (complete === true) {
      $this.animate({
        opacity: 0.0,                   // animate opacity
        paddingLeft: '+=180',           // animate padding
      }, 500, 'swing', function() {     // use callback when animation completes
        $this.remove();                 // then remove the item
      });
    } else {
      item = $this.text();
      $this.remove();                         // remove list item
      $list.append('<li class=\"complete\">'  // add to end of list as complete
        + item + '</li>').hide().fadeIn(300); // hide it so it can be faded in
      updateCount();
    }
  });

});