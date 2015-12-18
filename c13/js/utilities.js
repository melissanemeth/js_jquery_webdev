// This is the helper function to add an event listener

// el stands for element
function addEvent(el, event, callback) {
  // if addEventListener works, use it
  if ('addEventListener' in el) {
    el.addEventListener(event, callback, false);
  } else {
    /* Must add two methods to the element, then use 
       attachEvent to call them when the event occurs.
       The first method should run when the event occurs.
       The 2nd method calls the method from the previous
       step. It's needed to pass the event object to the
       function in the first method. */
    el['e' + event + callback] = callback;
    el[event + callback] = function() {
      el['e' + event + callback](window.event);
    };
    /* attachEvent listens for specified event on specified
       element. It calls the second method, which in turn
       calls the first method using the correct reference to
       the event object. */
    el.attachEvent('on' + event, el[event + callback]);
  }
}