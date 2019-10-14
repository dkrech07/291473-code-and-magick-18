'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballColors = document.querySelector('.setup-fireball-wrap');

  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');
  var inputfireballColors = document.querySelector('input[name="fireball-color"]');

  var coatCount = 1;
  var eyesCount = 1;
  var fireballCount = 1;

  var coatColorHandler = function () {
    wizardCoat.style.fill = COAT_COLORS[coatCount];
    inputCoatColor.value = COAT_COLORS[coatCount];

    var newColor = COAT_COLORS[coatCount];
    wizard.onCoatChange(newColor);

    if (coatCount === EYES_COLORS.length - 1) {
      coatCount = 0;
    } else {
      coatCount = coatCount + 1;
    }
  };

  var eyesColorHandler = function () {
    wizardEyes.style.fill = EYES_COLORS[eyesCount];
    inputEyesColor.value = EYES_COLORS[eyesCount];

    var newColor = EYES_COLORS[eyesCount];
    wizard.onEyesChange(newColor);

    if (eyesCount === EYES_COLORS.length - 1) {
      eyesCount = 0;
    } else {
      eyesCount = eyesCount + 1;
    }
  };

  var fireballColorsHandler = function () {
    fireballColors.style.backgroundColor = FIREBALL_COLORS[fireballCount];
    inputfireballColors.value = FIREBALL_COLORS[fireballCount];

    if (fireballCount === FIREBALL_COLORS.length - 1) {
      fireballCount = 0;
    } else {
      fireballCount = fireballCount + 1;
    }
  };

  wizardCoat.addEventListener('click', coatColorHandler);
  wizardEyes.addEventListener('click', eyesColorHandler);
  fireballColors.addEventListener('click', fireballColorsHandler);

  window.wizard = wizard;
  return window.wizard;
})();
