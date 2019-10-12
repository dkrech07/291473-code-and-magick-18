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

  window.render = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > NUMBER_CHARACTERS ? NUMBER_CHARACTERS : data.length;

    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }

    similarListElement.appendChild(fragment);
    window.popUp.querySelector('.setup-similar').classList.remove('hidden');
  };

})();
