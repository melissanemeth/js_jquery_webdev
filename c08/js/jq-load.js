// user clicks a nav link
$('nav a').on('click', function(e) {
  // stop the link from taking users to a new page
  e.preventDefault();
  /* this holds the URL of the page to load, which is the href
     of the link the user clicked on */
  var url = this.href;

  // update class attributes to indicate which page is current
  $('nav a.current').removeClass('current');
  $(this).addClass('curent');

  // remove element holding the content
  $('#container').remove();
  // select container and get new content
  // hide it so it can be faded in
  $('#content').load(url + ' #content').hide().fadeIn('slow');
});