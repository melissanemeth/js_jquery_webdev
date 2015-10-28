var colors = ['white', 'black', 'custom'];

// Update the third item in the array
colors[2] = 'beige';

var el = document.getElementById('colors');

// Replace with the third item from the array
el.textContent = colors[2];