'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


    var coatColor;
    var eyesColor;
    var fireballColor;

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  }

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

    if (coatCount === EYES_COLORS.length - 1) {
      coatCount = 0;
    } else {
      coatCount = coatCount + 1;
    }
     var newColor = COAT_COLORS[coatCount];

    coatColor = newColor;

    wizard.onCoatChange(newColor);

    return coatColor;
  };

  var eyesColorHandler = function () {
    wizardEyes.style.fill = EYES_COLORS[eyesCount];
    inputEyesColor.value = EYES_COLORS[eyesCount];

    if (eyesCount === EYES_COLORS.length - 1) {
      eyesCount = 0;
    } else {
      eyesCount = eyesCount + 1;
    }
    var newColor = EYES_COLORS[eyesCount];

    eyesColor = newColor;

    wizard.onEyesChange(newColor);

    return eyesColor;
  };

  var fireballColorsHandler = function () {
    fireballColors.style.backgroundColor = FIREBALL_COLORS[fireballCount];
    inputfireballColors.value = FIREBALL_COLORS[fireballCount];

    if (fireballCount === EYES_COLORS.length - 1) {
      fireballCount = 0;
    } else {
      fireballCount = fireballCount + 1;
    }
    var newColor = EYES_COLORS[fireballCount];

    fireballColor = newColor;

    return fireballCount;
  };

  wizardCoat.addEventListener('click', coatColorHandler);

  wizardEyes.addEventListener('click', eyesColorHandler);

  fireballColors.addEventListener('click', fireballColorsHandler);


  return window.wizard = wizard;
})();
