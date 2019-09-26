'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');

var inputCoatColor = document.querySelector('input[name="coat-color"]');
var inputEyesColor = document.querySelector('input[name="eyes-color"]');
var inputFireballColor = document.querySelector('input[name="fireball-color"]');

var getRandom = function (number) {

  return Math.floor(Math.random() * number);
};

var getWizardsList = function () {
  var wizardsArray = [];
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var wizard = {
      name: WIZARD_FIRST_NAMES[getRandom(WIZARD_FIRST_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[getRandom(WIZARD_SECOND_NAMES.length)],
      coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
    };
    wizardsArray.push(wizard);
  }

  return wizardsArray;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var addWizard = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

addWizard(getWizardsList());

setup.querySelector('.setup-similar').classList.remove('hidden');

var escPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', escPressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', escPressHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validiti.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validiti.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validiti.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  }
});

var coatCount = 1;
var eyesCount = 1;
var fireballCount = 1;

// Изменение цвета плаща
var coatColorHandler = function () {
  wizardCoat.style.fill = COAT_COLORS[coatCount];
  inputCoatColor.value = COAT_COLORS[coatCount];

  if (coatCount === EYES_COLORS.length - 1) {
    coatCount = 0;
  } else {
    coatCount = coatCount + 1;
  }
};

// Изменение цвета глаз
var eyesColorHandler = function () {
  wizardEyes.style.fill = EYES_COLORS[eyesCount];
  inputEyesColor.value = EYES_COLORS[eyesCount];

  if (eyesCount === EYES_COLORS.length - 1) {
    eyesCount = 0;
  } else {
    eyesCount = eyesCount + 1;
  }
};

// Изменение цвета файербола
var fireballColorHandler = function () {
  fireballColor.style.backgroundColor = FIREBALL_COLORS[fireballCount];
  inputFireballColor.value = FIREBALL_COLORS[fireballCount];

  if (fireballCount === EYES_COLORS.length - 1) {
    fireballCount = 0;
  } else {
    fireballCount = fireballCount + 1;
  }
};

wizardCoat.addEventListener('click', coatColorHandler);

wizardEyes.addEventListener('click', eyesColorHandler);

fireballColor.addEventListener('click', fireballColorHandler);
