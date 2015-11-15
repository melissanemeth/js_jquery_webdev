$(function() {
  $('li:lt(2)').removeClass('hot');
  $('li').eq(0).addClass('complete');
  $('li:gt(2)').addClass('cool');
});

// lt(2) selects items with index number less than 2
// eq(0) selects the first item (array number 0)
// gt(2) selects items with index number higher than 2