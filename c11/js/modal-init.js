(function() {
  // remove modal from page
  var $content = $('#share-options').detach();
  // click to open modal
  $('#share').on('click', function() {
    modal.open({content: $content, width:340, height:300});
  });
}());