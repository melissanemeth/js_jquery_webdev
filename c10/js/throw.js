var width = 12;
var height = 'test';

function calculateArea(width, height) {
  try {
    var area = width * height;
    // if it's a number return area, or else throw error
    if (!NaN(area)) {
      return area;
    } else {
      throw new Error('calculateArea() received invalid number');
    }
    // if there was an error, show in console
  } catch(e) {
    console.log(e.name + ' ' + e.message);
    return 'We were unable to calculate the area.';
  }
}

document.getElementById('area').innerHTML = calculateArea(width, height);