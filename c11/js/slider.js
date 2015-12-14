$('.slider').each(function() {
  // current slider
  var $this   = $(this);
  // get the slide-group container
  var $group  = $this.find('.slide-group');
  // create jQuery object to hold all slides
  var $slides = $this.find('.slide');
  // create array to hold nav buttons
  var buttonArray  = [];
  // hold index number of current slide
  var currentIndex = 0;
  // set timing gap between auto-slides
  var timeout;

  // create the movement
  function move(newIndex) {
    var animateLeft, slideLeft;
    // when the slide moves, call advance
    advance();

    // If it is the current slide animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      // put new slide to right, animate to left
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      // put new slide to left, animate to right
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    // animate slides
    $group.animate( {left: animateLeft}, function() {
      // hide previous slide
      $slides.eq(currentIndex).css( {display: 'none'} );
      // set position of new item
      $slides.eq(newIndex).css( {left: 0} );
      // set position of group of slides
      $group.css( {left: 0} );
      // set currentIndex to new image index
      currentIndex = newIndex;
    });
  }

  function advance() {
    // clear previous timeout so new image will show as soon as user clicks a button
    clearTimeout(timeout);
    // set new timer to run every 4 seconds
    timeout = setTimeout(function() {
      // if current slide < total slides
      if (currentIndex < ($slides.length - 1)) {
        // move to the next slide
        move(currentIndex + 1);
      } else {
        // move to the first slide
        move(0);
      }
    }, 4000);
  }

  $.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    // if it's the current item, add active class
    if (index === currentIndex) {
      $button.addClass('active');
    }
    // create button event handler
    $button.on('click', function() {
      // call move
      move(index);
      // add it to the button holder
    }).appendTo('.slide-buttons');
    // add to button array
    buttonArray.push($button);
  });

  advance();

});