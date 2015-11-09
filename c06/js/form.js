var form, selectPackage, packageHint, terms, termsHint;
form = document.getElementById('formSignup');
selectPackage = document.getElementById('package');
packageHints = document.getElementById('packageHint');
terms = document.getElementById('terms');
termsHint = document.getElementById('termsHint');

function packageHint() {
  var package = this.options[this.selectedIndex].value;
  if (package === 'monthly') {
    packageHints.innerHTML = 'Save $10 when you purchase a 1 year subscription!';
  } else {
    packageHints.innerHTML = 'Great choice!';
  }
}

function checkTerms(event) {
  if (!terms.checked) {
    termsHint.innerHTML = 'You must agree to the terms of service.';
    event.preventDefault();
  }
}

form.addEventListener('submit', checkTerms, false);
selectPackage.addEventListener('change', packageHint, false);