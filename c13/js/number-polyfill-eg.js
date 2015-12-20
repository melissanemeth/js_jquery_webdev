yepnope({
  // test is the feature you are checking for
  test: Modernizr.inputtypes.number,
  // yep is the files to load if the feature is supported
  // yep: ['js/numPolyfill.js', 'css/number.css'],
  // nope is the files to load if feature is not supported
  // can load multiple files as an array
  nope: ['js/numPolyfill.js', 'css/number.css'],
  // complete can run a function when the checks are complete
  complete : function() {
  //  console.log('YepNope + Modernizr are done');
  }
});