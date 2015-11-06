var newEl = document.createElement('li');
var newText = document.createTextNode('quinoa');

// attach text node to new element
newEl.appendChild(newText);

// find position where new element should be added
var position = document.getElementsByTagName('ul')[0];

// insert element into position
position.appendChild(newEl);