(function () {
  // disable html5 validation and use javascript instead
  document.forms.register.noValidate = true;

  // anonymous function triggered by the submit event
  $('form').on('submit', function (e) {      // When form is submitted
    var elements = this.elements;            // Collection of form controls
    var valid = {};                          // Custom valid object
    var isValid;                             // isValid: checks form controls
    var isFormValid;                         // isFormValid: checks entire form

    // perform generic checks (calls functions outside the event handler)
    var i;
    for (i = 0, l = elements.length; i < l; i++) {
      // Next line calls validateRequired() validateTypes()
      isValid = validateRequired(elements[i]) && validateTypes(elements[i]); 
      if (!isValid) {                    // If it does not pass these two tests
        showErrorMessage(elements[i]);   // Show error messages
      } else {                           // Otherwise
        removeErrorMessage(elements[i]); // Remove error messages
      }                                  // End if statement
      valid[elements[i].id] = isValid;   // Add element to the valid object
    }                                    // End for loop

    // perform custom validation
    // bio (you could cache bio input in variable here)
    if (!validateBio()) {                // Call validateBio(), and if not valid
      showErrorMessage(document.getElementById('bio')); // Show error message
      valid.bio = false;                 // Update valid object - this element is not valid
    } else {                             // Otherwise remove error message
      removeErrorMessage(document.getElementById('bio'));
    }

    // password (can cache password input in variable here)
    if (!validatePassword()) {          // Call validatePassword(), and if not valid
      showErrorMessage(document.getElementById('password')); // Show error message
      valid.password = false;           // Update the valid object - this element is not valid
    } else {                            // Otherwise remove error message
      removeErrorMessage(document.getElementById('password'));
    }

    // parental consent (can cache parent-consent in variable here)
    if (!validateParentsConsent()) {     // Call validateParentalConsent(), and if not valid
      showErrorMessage(document.getElementById('parents-consent')); // Show error message
      valid.parentsConsent = false;      // Update the valid object - this is not valid
    } else {                             // Otherwise remove error message
      removeErrorMessage(document.getElementById('parents-consent'));
    }

    // check if form is valid and ok to submit
    // Loop through valid object, if there are errors set isFormValid to false
    for (var field in valid) {          // Check properties of the valid object
      if (!valid[field]) {              // If it is not valid
        isFormValid = false;            // Set isFormValid variable to false
        break;                          // Stop the for loop, an error was found
      }                                 // Otherwise
      isFormValid = true;               // The form is valid and OK to submit
    }

    // If the form did not validate, prevent it being submitted
    if (!isFormValid) {                 // If isFormValid is not true
      e.preventDefault();               // Prevent the form being submitted
    }

  });

  // check if field is required and if it has a value
  // Relies on isRequired() and isEmpty() both shown below, and setErrorMessage - shown later.
  function validateRequired(el) {
    if (isRequired(el)) {                           // Is this element required?
      var valid = !isEmpty(el);                     // Is value not empty (true / false)?
      if (!valid) {                                 // If valid variable holds false
        setErrorMessage(el,  'Field is required');  // Set the error message
      }
      return valid;                                 // Return valid variable (true or false)?
    }
    return true;                                    // If not required, all is ok
  }

  // check if element is required
  function isRequired(el) {
   return ((typeof el.required === 'boolean') && el.required) ||
     (typeof el.required === 'string');
  }

  // check if element is empty
  function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
  }

  // check if value fits the type attribute
  function validateTypes(el) {
    // if element has no value, return true, otherwise get the value from .data()
    if (!el.value) return true;
    var type = $(el).data('type') || el.getAttribute('type');  // OR get the type of input
    if (typeof validateType[type] === 'function') { // Is the type a method of validate object?
      return validateType[type](el);                // If yes, check if the value validates
    } else {                                        // If not
      return true;                                  // Return true because it cannot be tested
    }
  }

  // check for parental consent if under 13
  // needs birthday.js to work
  function validateParentsConsent() {
    var parentsConsent   = document.getElementById('parents-consent');
    var consentContainer = document.getElementById('consent-container');
    var valid = true;                          // Variable: valid set to true
    if (consentContainer.className.indexOf('hide') === -1) { // If checkbox shown
      valid = parentsConsent.checked;          // Update valid: is it checked/not
      if (!valid) {                            // If not, set the error message
        setErrorMessage(parentsConsent, 'You need your parents\' consent');
      }
    }
    return valid;                               // Return whether valid or not
  }

  // Check if the bio is <= 140 characters
  function validateBio() {
    var bio = document.getElementById('bio');
    var valid = bio.value.length <= 140;
    if (!valid) {
      setErrorMessage(bio, 'Please make sure your bio does not exceed 140 characters');
    }
    return valid;
  }

  // Check that the passwords both match and are 8 characters or more
  function validatePassword() {
    var password = document.getElementById('password');
    var valid = password.value.length >= 8;
    if (!valid) {
      setErrorMessage(password, 'Please make sure your password has at least 8 characters');
    }
    return valid;
  }

  function setErrorMessage(el, message) {
    $(el).data('errorMessage', message);                 // Store error message with element
  }

  function getErrorMessage(el) {
    return $(el).data('errorMessage') || el.title;       // Get error message or title of element
  }

  function showErrorMessage(el) {
    var $el = $(el);                                     // The element with the error
    var errorContainer = $el.siblings('.error.message'); // Any siblings holding an error message

    if (!errorContainer.length) {                         // If no errors exist with the element
       // Create a <span> element to hold the error and add it after the element with the error
       errorContainer = $('<span class="error message"></span>').insertAfter($el);
    }
    errorContainer.text(getErrorMessage(el));             // Add error message
  }

  function removeErrorMessage(el) {
    var errorContainer = $(el).siblings('.error.message'); // Get the sibling of this form control used to hold the error message
    errorContainer.remove();                               // Remove the element that contains the error message
  }

  // Checks whether data is valid, if not set error message
  var validateType = {
    email: function (el) {                                 // Create email() method
      // Basic Regex that checks for a single @ in the email
      var valid = /[^@]+@[^@]+/.test(el.value);            // Store result of test in valid
      if (!valid) {                                        // If the value of valid is not true
        setErrorMessage(el, 'Please enter a valid email'); // Set error message
      }
      return valid;                                        // Return the valid variable
    },
    number: function (el) {                                // Create number() method
      var valid = /^\d+$/.test(el.value);                  // Store result of test in valid
      if (!valid) {
        setErrorMessage(el, 'Please enter a valid number');
      }
      return valid;
    },
    // create date method and store result of test in var valid
    date: function (el) {
      var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
      if (!valid) {                                        // If the value of valid is not true
        setErrorMessage(el, 'Please enter a valid date');  // Set error message
      }
      return valid;                                        // Return the valid variable
    }
  };

}());