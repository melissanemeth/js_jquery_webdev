$(function() {
  // selects li with pine, replace with almonds
  $('li:contains("pine")').text('almonds');
  // select all li elements of class hot
  // return the content of each li element as emphasized text
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  // select li element with id one, remove it
  $('li#one').remove();
});