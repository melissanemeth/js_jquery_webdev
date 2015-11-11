$('li[id!="one"]').hide().delay(500).fadeIn(1400);

/*
can also do this on multiple lines:

$('li[id!="one"]')
      .hide()
      .delay(500)
      .fadeIn(1400);

also note that if one method in the chain doesn't work,
the rest won't work either.

*/