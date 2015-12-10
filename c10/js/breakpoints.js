var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();
  area = width * height;

  if (area < 100) {
    debugger; // this sets a breakpoint if the dev tools are open
  }

  $form.append('<p>' + area + '</p>')
});