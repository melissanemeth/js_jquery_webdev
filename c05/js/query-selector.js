// querySelector only returns the first element node that matches the selector

var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns a list

var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';