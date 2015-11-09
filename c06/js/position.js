var sx = document.getElementById('sx'); // screenX
var sy = document.getElementById('sy'); // screenY
var px = document.getElementById('px'); // pageX
var py = document.getElementById('py'); // pageY
var cx = document.getElementById('cx'); // clientX
var cy = document.getElementById('cy'); // clientY

function showPosition(event) {
  // update each element with it's value
  sx.value = event.screenX; 
  sy.value = event.screenY;
  px.value = event.pageX;
  py.value = event.pageY;
  cx.value = event.clientX;
  cy.value = event.clientY;
}

var pos = document.getElementById('body');
pos.addEventListener('mousemove', showPosition, false); // moving the mouse updates the positon