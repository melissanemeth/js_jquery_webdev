/* this script checks if the JSON can be parsed with a try block
   before displaying the info to users. */

var feed = document.getElementById('feed');

// this is JSON data
var response = '{"deals": [{"title": "Farrow and Ball","description": 
                "New season 2.5l tins are all reduced this week","price": 
                30,"link": "http://www.example.com/farrow-and-ball/"},
                {"title": "Siecle Paints from the UK","description": 
                "Probably the best named paints in the world","price": 28,
                "link": "http://www.example.com/siecle/"},{"title": 
                "Kelly Hoppen","description": "Now stocking paints by 
                interior designer Kelly Hoppen","price": 42,"link": 
                "http://www.example.com/kelly-hoppen/"}]}';

if (response) {
  /* First specify code you think might throw an exception with
     try. If exception occurs, control is passed to catch. Must
     use try + catch or finally or both. */
  try {
    var dealData = JSON.parse(response);
    showContent(dealData);
    // If try fails, run this alternative. Requires error object.
  } catch(e) {
    var errorMessage = e.name + ' ' + e.message;
    console.log(errorMessage);
    feed.innerHTML = '<em>Sorry, could not load deals</em>';
    // Finally will run whether try succeeded or failed
  } finally {
    var link = document.createElement('a');
    link.innerHTML = ' <a href="try-catch-finally.html">reload</a>';
    feed.appendChild(link);
  }
}

function showContent(dealData) {
  var newContent = '';
  for (var i in dealData.deals) {
    newContent += '<div class="deal">';
    newContent += '<h2>' + dealData.deals[i].title + '</h2>';
    newContent += '<p>' + dealData.deals[i].description + '</p>';
    newContent += '<a href="' + dealData.deals[i].link + '">';
    newContent += ' ' + dealData.deals[i].link;
    newContent +='</a>';
    newContent += '</div>';
  }
  feed.innerHTML = newContent;
}

/* Try, catch, finally is similar to .done(), .fail(), and
   .always() in jQuery. */