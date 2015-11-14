var $listItems = $('li');
// find last list item with class hot, remove class
$listItems.filter('.hot:last').removeClass('hot');
// find li elements without class hot, add class cool
$('li:not(.hot)').addClass('cool');
// find li with em, add class complete
$listItems.has('em').addClass('complete');

/* look at each list item, if class hot then add
   "Priority item" to beginning of item */
$listItems.each(function() {
  var $this = $(this);
  if ($this.is('.hot')) {
    $this.prepend('Priority item: ');
  }
});

// check for li elements that contain "honey", add (local) to end
$('li:contains("honey")').append(' (local)');