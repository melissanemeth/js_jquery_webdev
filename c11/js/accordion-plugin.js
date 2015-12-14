// Use $ as variable name
(function($) {
  // Return the jQuery selection
  $.fn.accordion = function (speed) {
    this.on('click', '.accordion-control', function (e) {
      e.preventDefault();
      $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle(speed);
    });
    // Return the jQuery selection
    return this;
  };
  // Pass in jQuery object
}(jQuery));