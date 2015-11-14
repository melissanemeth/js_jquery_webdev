$(function() {
  $('h2').hide().slideDown();
  var $li = $('li');
  // items have to be hidden before they can fade in
  // index acts as a counter indicating the current li element
  // delay gives a pause between each item, otherwise they'd all appear at once
  $li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
  });
  $li.on('click', function() {
    $(this).fadeOut(700);
  });
});