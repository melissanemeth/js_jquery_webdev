var today = new Date();
var year = today.getFullYear();
var est = new Date('Mar 06, 2002 18:35:45');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';
