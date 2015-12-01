// once the DOM has loaded
$(function() {
  // load new content into page
  function loadContent(url) {
    $('content').load(url + ' #container').hide().fadeIn('slow');
  }

  // if a link is clicked, run this function
  $('nav a').on('click', function(e) {
    e.preventDefault();
    // get href attribute of link
    var href = this.href;
    // store the link in a jQuery object
    var $this = $(this);
    // remove current from links
    $('a').removeClass('current');
    // update current link
    $this.addClass('current');
    // call function to load content
    loadContent(href);
    // update history
    history.pushState('', $this.text, href);
  });

  // when user clicks back/forward, fire onpopstate
  window.onpopstate = function() {
    // get the file path
    var path = location.pathname;
    // call function to load page
    loadContent(path);
    // retrieve file name so current link can be updated
    var page = path.substring(location.pathname.lastIndexOf("/") + 1);
    // remove current from links
    $('a').removeClass('current');
    // update current link
    $('[href="' + page + '"]').addClass('current');
  }
})