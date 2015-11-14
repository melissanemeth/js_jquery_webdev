$(function() {
  var $h2 = $('h2');
  $('ul').hide();
  $h2.append('<a>show</a>');

  $h2.on('click', function() {  // click h2 to trigger function
    $h2.next()                  // selct next sibling, which is the ul
      .fadeIn(500)              // ul fades in
      .children('.hot')         // selects li elements of class hot
      .addClass('complete');    // add class complete
    $h2.find('a').fadeOut();    // finds the h2 <a> element and fade it out
  });
});