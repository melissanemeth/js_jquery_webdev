// select the element to remove
var removeEl = document.getElementsByTagName('li')[3];

// select it's containing element
var containerEl = removeEl.parentNode;

// remove the element
containerEl.removeChild(removeEl);