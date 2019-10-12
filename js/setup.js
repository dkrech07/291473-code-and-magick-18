'use strict';

(function () {
  window.popUp = document.querySelector('.setup');

  var form = window.popUp.querySelector('.setup-wizard-form');

  var successUploadHandler = function () {
    window.popUp.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.upload(new FormData(form), successUploadHandler, window.errorHandler);
  });
})();
