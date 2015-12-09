var $form = $('#calculator');

$form.on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  var width, height, area;
  width = $('#width').val();
  height = $('#height').val();
  area = width * height;

/* console.group groups the messages together so you can
   expand and contract the results */
  console.group('Area calculations');
    console.info('Width ', width);
    console.info('Height ', height);
    console.log(area);
  console.groupEnd();  // make sure to end the group

  $form.append('<p>' + area + '</p>');
})