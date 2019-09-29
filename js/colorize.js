'use strict';

(function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');

  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');
  var inputFireballColor = document.querySelector('input[name="fireball-color"]');

  var coatCount = 1;
  var eyesCount = 1;
  var fireballCount = 1;

  var coatColorHandler = function () {
    wizardCoat.style.fill = window.setup.COAT_COLORS[coatCount];
    inputCoatColor.value = window.setup.COAT_COLORS[coatCount];

    if (coatCount === window.setup.EYES_COLORS.length - 1) {
      coatCount = 0;
    } else {
      coatCount = coatCount + 1;
    }
  };

  var eyesColorHandler = function () {
    wizardEyes.style.fill = window.setup.EYES_COLORS[eyesCount];
    inputEyesColor.value = window.setup.EYES_COLORS[eyesCount];

    if (eyesCount === window.setup.EYES_COLORS.length - 1) {
      eyesCount = 0;
    } else {
      eyesCount = eyesCount + 1;
    }
  };

  var fireballColorHandler = function () {
    fireballColor.style.backgroundColor = window.setup.FIREBALL_COLORS[fireballCount];
    inputFireballColor.value = window.setup.FIREBALL_COLORS[fireballCount];

    if (fireballCount === window.setup.EYES_COLORS.length - 1) {
      fireballCount = 0;
    } else {
      fireballCount = fireballCount + 1;
    }
  };

  wizardCoat.addEventListener('click', coatColorHandler);

  wizardEyes.addEventListener('click', eyesColorHandler);

  fireballColor.addEventListener('click', fireballColorHandler);
})();
