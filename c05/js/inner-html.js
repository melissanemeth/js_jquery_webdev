var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTML;
// turn item into link
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';