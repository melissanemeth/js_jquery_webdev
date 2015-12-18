(function() {
  // get the images
  var $imgs = $('#gallery img');
  // get the search input
  var $search = $('#filter-search');
  // create an array called cache
  var cache =[];

  // for each image, add an object to the cache
  $imgs.each(function() {
    cache.push({
      // the object's element property holds a reference to the img
      element: this,
      // get the text from the alt property
      // trim removes spaces from start and end
      text: this.alt.trim().toLowerCase()
    });
  });

  // declare filter function and store search input in 'query'
  function filter() {
    var query = this.value.trim().toLowerCase();

    // for each entry in the cache, pass the image
    cache.forEach(function(img) {
      // set the index to 0
      var index = 0;
      // if query has a value
      if (query) {
        // check if search term is in the text property
        index = img.text.indexOf(query);
      }
      /* if found, it will be a positive number, if not,
         it will be -1. If it's -1, set the display property
         to none, otherwise set display to a blank string
         (showing the image). */
      img.element.style.display = index === -1 ? 'none' : '';
    });
  }

  // if the browser supports the input event
  if ('oninput' in $search[0]) {
    // use input event to call filter
    $search.on('input', filter);
  } else {
    // otherwise use keyup event to call filter
    $search.on('keyup', filter);
  }
}());