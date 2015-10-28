// Create variables for the welcome message
var greeting = 'Hello ';
var name = 'Molly';
var message = ', please check your order:';
//Concatenate the three variables to create the message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has id greeting
var el = document.getElementById('greeting');
// Replace content with personalized welcome
el.textContent = welcome;

// Get tiles element, update it's contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get subTotal element, update it's contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get shipping element, update it's contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get grand total element, update contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;