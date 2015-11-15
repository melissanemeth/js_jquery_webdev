$(function() {
  // store height of page container
  var listHeight = $('page').height();
  // write height of page at end of list
  $('ul').append('<p>Height: ' + listHeight + 'px</p>');
  // set width of all li elements to 50% of their current width
  $('li').width('50%');
  // set first li to 125 pixels
  $('li#one').width(125);
  // set second li to 75% of width when the page was loaded
  $('li#two').width('75%');
});