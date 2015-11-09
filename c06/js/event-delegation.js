function getTarget(e) {
  // if there's no event oject, use the IE fallback
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e) {
  var target, parent, grandparent;
  target = getTarget(e);
  parent = target.parentNode;
  grandparent = target.parentNode.parentNode;
  grandparent.removeChild(parent);  // removing item from list

  // prevent link from taking user elsewhere
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

var x = document.getElementById('shoppingList');
if (x.addEventListener) {
  x.addEventListener('click', function(e) {
    itemDone(e);
  }, false);  // false uses bubbling phase for flow
} else {
  x.attachEvent('onclick', function(e) {
    itemDone(e);
  });
}