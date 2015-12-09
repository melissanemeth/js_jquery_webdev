// console.info is used for general information
console.info('The script is now running...');

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // console.warn is used for warnings
  console.warn('You entered ', this.value);
});

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  console.log('Width ' + width);

  height = $('#height').val();
  console.log('Height ' + height);
  
  area = width * height;
  // console.error is used to hold errors
  console.error(area);

  $form.append('<p class="result">' + area + '</p>')
});