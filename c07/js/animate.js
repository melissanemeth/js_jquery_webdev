$(function() {
  $('li').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      // add padding to make it look like the text is sliding right
      paddingLeft: '+=80'  
      // 500 is the speed of the animation
      // the function is what should happen when the animation is over
    }, 500, function() {  
      $(this).remove();
    });
  });
});