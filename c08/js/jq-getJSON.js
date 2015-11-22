// add element to page to hold exchange rate data
$('#exchangerates').append('<div id="rates"></div><div id="reload">
  </div>');

// load JSON data of currency exchange rates 
function loadRates() {
  $.getJSON('data/rates.json')
  // .done only runs if data is successfuly retrieved
  .done(function(data) {
    var d = new Date();
    var hrs = d.getHours();
    var mins = d.getMinutes();
    var msg = '<h2>Exchange Rates</h2>';
    // add each rate
    $.each(data, function(key, val) {
      msg += '<div class="' + key + '">' + key + ': ' + val +
      '</div>';
    });
    msg += '<br>Last update: ' + hrs + ':' + mins + '<br>';
    $('#rates').html(msg);
    // fail only runs if server can't return data
  }).fail(function() {
    $('aside').append('Sorry, rates cannot be loaded.');
    /* after done or fail, run always to add refresh button
       and trigger loadRates again */
  }).always(function() {
    var reload = '<a id="refresh" href="#">';
    reload += '<img src="img/refresh.png" alt="refresh" /></a>';
    $('#reload').on('click', function(e) {
      e.preventDefault();
      loadRates();
    });
  });
}

loadRates();