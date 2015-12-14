/* The accorion menu, tabbed panels, and responsive
slider are hidden by default.
This content would be inaccessible to
visitors that do not have JavaScript enabled if we
didn't provide alternative styling.
One way to solve this is by adding a class attribute
whose value is no-js to the opening <html> tag.
This class is then removed by JavaScript (using the
replace() method of the String object) if JavaScript
is enabled.
The no-js class can then be used to provide styles
targeted to visitors who do not have JavaScript
enabled. */

var thisDocument = document.documentElement;
thisDocument.className = thisDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');
