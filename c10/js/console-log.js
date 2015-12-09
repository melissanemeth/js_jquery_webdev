// indicate in the console the script is running
console.log('The script is now running...');
var $form, width, height, area;
$form = $('#calculator');

// when input loses focus, write value to console
$('form input[type="text"]').on('blur', function() {
  console.log('You entered ', this.value);
});

// when user clicks submit, write message to console
$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  console.log('Width ' + width);

  height = $('#height').val();
  console.log('Height ' + height);
  
  area = width * height;
  console.log(area);

  $form.append('<p>' + area + '</p>')
});