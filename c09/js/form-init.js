// remember that this is the shortcut for the jQuery .ready() method
$(function() {
  // turn the input into a datepicker
  $('#arrival').datepicker();

  // cache the price input and the div for the price range
  var $amount = $('#amount');
  var $range = $('#price-range');

  // turn the price-range input into a slider
  $('#price-range').slider({
    range: true,  // if it is a range, it gets two slider handles
    min: 0,
    max: 400,
    values: [175, 300],  // values to see when the page loads
    // when the slider is used, update the amount element
    slide: function(event, ui) {
      $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
    }
  });

  // set the initial values of the amount element
  $amount
    .val('$' + $range.slider('values', 0)
    + ' - $' + $range.slider('values', 1));
});

