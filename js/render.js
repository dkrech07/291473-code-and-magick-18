'use strict';

(function () {
  var NUMBER_CHARACTERS = 4;
  var similarListElement = window.popUp.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // var shuffleArray = function (array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  // };

  window.render = function (data) {
    // shuffleArray(data);

    var fragment = document.createDocumentFragment();

    var takeNumber = data.length > NUMBER_CHARACTERS ? NUMBER_CHARACTERS : data.length;

    for (var i = 0; i < takeNumber; i++) {

      fragment.appendChild(renderWizard(data[i]));
    }

    similarListElement.appendChild(fragment);

    window.popUp.querySelector('.setup-similar').classList.remove('hidden');
  };

})();
