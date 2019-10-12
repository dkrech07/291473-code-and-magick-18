'use strict';

(function () {

  var coatColor;
  var eyesColor;
  var fireballColor;
  var wizards = [];

  var updateWizards = function () {
    var sameCoatAndEyesWizards = wizards.filter(function (it) {
         return it.colorCoat === coatColor &&
           it.colorEyes === eyesColor;
       })

       var sameCoatWizards = wizards.filter(function (it) {
         return it.colorCoat === coatColor;
       });

       var sameEyesWizards = wizards.filter(function (it) {
         return it.colorEyes === eyesColor;
       });

       var filteredWizards = sameCoatAndEyesWizards;
       filteredWizards = filteredWizards.concat(sameCoatWizards);
       filteredWizards = filteredWizards.concat(sameEyesWizards);
       filteredWizards = filteredWizards.concat(wizards);

       var uniqueWizards =
       filteredWizards.filter(function (it, i) {
         return filteredWizards.indexOf(it) === i;
       });

       var oldElements = document.querySelector('.setup-similar-list');

         var removeChild = function (element) {
         while (element.firstChild) {
           element.removeChild(element.firstChild);
         }
       }

       removeChild(oldElements);

       window.render(uniqueWizards);
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
    wizardCoat.style.fill = window.setup.COAT_COLORS[coatCount];
    inputCoatColor.value = window.setup.COAT_COLORS[coatCount];

    if (coatCount === window.setup.EYES_COLORS.length - 1) {
      coatCount = 0;
    } else {
      coatCount = coatCount + 1;
    }
     var newColor = window.setup.COAT_COLORS[coatCount];

    coatColor = newColor;

    updateWizards();

    return coatColor;
  };

  var eyesColorHandler = function () {
    wizardEyes.style.fill = window.setup.EYES_COLORS[eyesCount];
    inputEyesColor.value = window.setup.EYES_COLORS[eyesCount];

    if (eyesCount === window.setup.EYES_COLORS.length - 1) {
      eyesCount = 0;
    } else {
      eyesCount = eyesCount + 1;
    }
    var newColor = window.setup.EYES_COLORS[eyesCount];

    eyesColor = newColor;

    updateWizards();

    return eyesColor;
  };

  var fireballColorsHandler = function () {
    fireballColors.style.backgroundColor = window.setup.FIREBALL_COLORS[fireballCount];
    inputfireballColors.value = window.setup.FIREBALL_COLORS[fireballCount];

    if (fireballCount === window.setup.EYES_COLORS.length - 1) {
      fireballCount = 0;
    } else {
      fireballCount = fireballCount + 1;
    }
    var newColor = window.setup.FIREBALL_COLORS[fireballCount];

    fireballColor = newColor;

    updateWizards();

    return fireballCount;
  };

  wizardCoat.addEventListener('click', coatColorHandler);

  wizardEyes.addEventListener('click', eyesColorHandler);

  fireballColors.addEventListener('click', fireballColorsHandler);

  var successLoadHandler = function (data) {
    wizards = data;
    updateWizards();
    // window.render(wizards);
  };

  window.errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.querySelector('header').before(node);
  };

  window.backend.load(successLoadHandler, window.errorHandler);
})();
