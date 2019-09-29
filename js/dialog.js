'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.popUp.querySelector('.setup-close');
  var userNameInput = window.setup.popUp.querySelector('.setup-user-name');

  var discardCoords = function () {
    window.setup.popUp.style.top = '';
    window.setup.popUp.style.left = '';
  };

  var escPressHandler = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    window.setup.popUp.classList.remove('hidden');
    document.addEventListener('keydown', escPressHandler);
  };

  var closePopup = function () {
    window.setup.popUp.classList.add('hidden');
    document.removeEventListener('keydown', escPressHandler);
    discardCoords();
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
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

  var dialogHandler = window.setup.popUp.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.popUp.style.top = (window.setup.popUp.offsetTop - shift.y) + 'px';
      window.setup.popUp.style.left = (window.setup.popUp.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (removeEvt) {
          removeEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
