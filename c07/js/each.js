$(function() {
  $('li').each(function() {
    var ids = this.id;
    $(this).append(' <span class="order">' + ids + '</span>');
  });
});

/* 'this' vs '(this)':
   'this' refers to the current element in the loop
   '(this)' creates a jQuery object that contains the current
   element in the loop, which allows jQuery methods to be used
   on that element.
*/