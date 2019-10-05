'use strict';

(function () {
  // var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var WIZARDS_NUMBER = 4;

  window.setup = {
    popUp: document.querySelector('.setup'),
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var NUMBER_CHARACTERS = 4;

  var similarListElement = window.setup.popUp.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getRandom = function (number) {

    return Math.floor(Math.random() * number);
  };

  // var getWizardsList = function () {
  //   var wizardsArray = [];
  //   for (var i = 0; i < WIZARDS_NUMBER; i++) {
  //     var wizard = {
  //       name: WIZARD_FIRST_NAMES[getRandom(WIZARD_FIRST_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[getRandom(WIZARD_SECOND_NAMES.length)],
  //       coatColor: window.setup.COAT_COLORS[getRandom(window.setup.COAT_COLORS.length)],
  //       eyesColor: window.setup.EYES_COLORS[getRandom(window.setup.EYES_COLORS.length)]
  //     };
  //     wizardsArray.push(wizard);
  //   }
  //
  //   return wizardsArray;
  // };
  //
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // var addWizard = function (wizards) {
  //   var fragment = document.createDocumentFragment();
  //
  //   for (var i = 0; i < WIZARDS_NUMBER; i++) {
  //     fragment.appendChild(renderWizard(wizards[i]));
  //   }
  //   similarListElement.appendChild(fragment);
  // };

  // addWizard(getWizardsList());

  // window.setup.popUp.querySelector('.setup-similar').classList.remove('hidden');

// Загрузка данных с сервера;
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < NUMBER_CHARACTERS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.setup.popUp.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  // window.backend.load(function (wizards) {
  //   var fragment = document.createDocumentFragment();
  //
  //   for (var i = 0; i < 4; i++) {
  //     fragment.appendChild(renderWizard(wizards[i]));
  //   }
  //   similarListElement.appendChild(fragment);
  //
  //   window.setup.popUp.querySelector('.setup-similar').classList.remove('hidden');
  // });

  // Отправка данных на сервер;
  var form = window.setup.popUp.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.upload(new FormData(form), function () {
      window.setup.popUp.classList.add('hidden');
    }, errorHandler);
  });

})();
