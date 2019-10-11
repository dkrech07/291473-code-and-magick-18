'use strict';

(function () {
  window.setup = {
    popUp: document.querySelector('.setup'),
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var form = window.setup.popUp.querySelector('.setup-wizard-form');

  var successUploadHandler = function () {
    window.setup.popUp.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.upload(new FormData(form), successUploadHandler, window.errorHandler);
  });
})();
