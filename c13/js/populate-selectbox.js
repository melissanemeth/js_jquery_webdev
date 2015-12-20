(function() {
  var type = document.getElementById('equipmentType');
  var model = document.getElementById('model');
  var cameras = {
    bolex: 'Bolex Paillard H8',
    yashica: 'Yashica 30',
    pathescape: 'Pathescape Super-8 Relax',
    canon: 'Canon 512'
  };
  var projectors = {
    kodak: 'Kodak Instamatic M55',
    bolex: 'Bolex Sound 715',
    eumig: 'Eumig Mark S',
    sankyo: 'Sankyo Dualux'
  };

  // when user changes the type select box
  addEvent(type, 'change', function() {
    // check if no selection was made yet
    if (this.value === 'choose') {
      model.innerHTML = '<option>Please choose a type first</option>';
      return; // this exits the function
    }
    // if an equipment type was selected, run getModels
    var models = getModels(this.value);

    // this holds all the options to choose in the 2nd box
    var options = '<option>Please choose a model</option>';
    for (var key in models) {
      options += '<option value="' + key + '">' + models[key] + '</option>';
    }
    model.innerHTML = options;
  });

  function getModels(equipmentType) {
    if (equipmentType === 'cameras') {
      return cameras;
    } else if (equipmentType === 'projectors') {
      return projectors;
    }
  }
}());