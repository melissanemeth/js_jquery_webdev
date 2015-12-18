(function() {
  // store all images
  var $imgs = $('#gallery img');
  // store buttons
  var $buttons = $('#buttons');
  // create tagged object
  var tagged = {};

  // loop through images and store in a variable
  $imgs.each(function() {
    var img = this;
    // get this element's tags
    var tags = $(this).data('tags');

    // if element has tags, split at comma
    if (tags) {
      tags.split(',').forEach(function(tagName) {
        // if no tags, add an empty array to the object
        if (tagged[tagName] == null) {
          tagged[tagName] = [];
        }
        // add the image to the array
        tagged[tagName].push(img);
      });
    }
  });

  // create an empty button with text Show All, make active
  $('<button/>', {
    text: 'Show All',
    class: 'active',
    // get the clicked button and add class active
    click: function() {
      $(this).addClass('active')
      // get its siblings and remove class active
      .siblings().removeClass('active');
    $imgs.show();
    }
  // add to buttons
  }).appendTo($buttons);

  // for each tag, create an empty button and add tag name
  $.each(tagged, function(tagName) {
    $('<button/>', {
      text: tagName + '(' + tagged[tagName].length + ')',
      // make active when clicked on, remove active from siblings
      click: function() {
        $(this).addClass('active')
        .siblings().removeClass('active');
      // hide all images and show just the ones with that tag
      $imgs.hide().filter(tagged[tagName]).show();
      }
    // add to the buttons
    }).appendTo($buttons);
  });
}());