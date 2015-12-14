// find list of tabs
$('.tab-list').each(function() {
  // store the list
  var $this = $(this);
  // get the active list item
  var $tab = $this.find('li.active');
  // get the link from the active tab
  var $link = $tab.find('a');
  // get the active panel
  var $panel = $($link.attr('href'));

// when user clicks a tab
  $this.on('click', '.tab-control', function(e) {
    e.preventDefault();
    // store the current link
    var $link = $(this);
    // get the href of the clicked tab
    var id = this.hash;

    // if it's not currently active
    if (id && !$link.is('.active')) {
      // make the panel inactive
      $panel.removeClass('active');
      // make the tab inactive
      $tab.removeClass('active');
      // make the new panel active
      $panel = $(id).addClass('active');
      // make the new tab active
      $tab = $link.parent().addClass('active');
    }
  });
});