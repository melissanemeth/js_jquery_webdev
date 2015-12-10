var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // this shows if a nubmer less than 10 is entered
  console.assert(this.value > 10, 'User entered less than 10');
});

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();
  area = width * height;
  // this shows if user did not enter a number
  console.assert($.isNumeric(area), 'User entered a non-numeric value');

  $form.append('<p>' + area + '</p>')
});