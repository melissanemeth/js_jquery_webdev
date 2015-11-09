var list, addLink, newItem, newText, counter, listItems;

list = document.getElementById('list');
addLink = document.getElementById('a');
counter = document.getElementById('counter');

function addItem(e) {
  e.preventDefault();
  newItem = document.createElement('li');
  newText = document.createTextNode('New list item');
  newItem.appendChild(newText);
  list.appendChild(newItem);
}

function updateCount() {
  listitems = list.getElementsByTagName('li').length;
  counter.innerHTML = listitems;
}

addLink.addEventListener('click', addItem, false);
list.addEventListener('DOMNodeInserted', updateCount, false);