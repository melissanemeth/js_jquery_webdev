// create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// when the response has loaded
xhr.onload = function() {
  // this won't work locally, only on a server
  // lines 9 and 45 commented out to make it work locally
  // if server status is ok
//  if (xhr.status === 200) {
    // this part is different because it's processing xml, not html
    // get xml response from server
    var response = xhr.responseXML;
    // find <event> elements
    var events = response.getElementsByTagName('event');

    // loop through them
    for (var i = 0; i < events.length; i++) {
      var container, image, location, city, newline;
      // add a div container
      container = document.createElement('div');
      // add class attribute
      container.className = 'event';

      // add map image
      image = document.createElement('img');
      image.setAttribute('src', getNodeValue(events[i], 'map'));
      image.setAttribute('alt', getNodeValue(events[i], 'location'));
      container.appendChild(image);

      // add location data
      location = document.createElement('p');
      city = document.createElement('b');
      newline = document.createElement('br');
      city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
      location.appendChild(newline);
      location.insertBefore(city, newline);
      location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
      container.appendChild(location);

      document.getElementById('content').appendChild(container);
    }
    // get content from XML
    function getNodeValue(obj, tag) {
      return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
//    }
  }
};
// final part is the same as the html example, but requests an XML file
xhr.open('GET', 'data/data.xml', true);
xhr.send(null);