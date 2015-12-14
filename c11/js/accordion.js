$('.accordion').on('click', '.accordion-control', function(e) {
  e.preventDefault;
  // get the element the user clicked on
  $(this)
    // select the following panel
    .next('.accordion-panel')
    // check that it's not currently animating
    .not(':animated')
    // show or hide it
    .slideToggle();
});