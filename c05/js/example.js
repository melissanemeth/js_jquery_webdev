var list = document.getElementsByTagName('ul')[0];

// add new item to end of list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('tempeh');
newItemLast.appendChild(newTextLast);  // adds text node to element
list.appendChild(newItemLast);  // finally add element to end of list

// add item to start of list
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('peaches');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');

// add cool class to all items
var i;
for (i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

// add number of items to heading
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;