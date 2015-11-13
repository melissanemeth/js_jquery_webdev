$(function() {
  var backgroundColor = $('li').css('background-color');
  $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
  $('li').css({
    'background-color': '#c5a996',
    'border': '1px solid #fff',
    'color': '#000',
    'font-family': 'Georgia',
    'padding-left': '+=75'
  });
});

/* better to change the value of a class attribute (to trigger
  new CSS rules) than to change CSS properties from within the 
  js file itself */