'use strict';
var KEYCODE = 27;
var accordions = document.getElementsByClassName('accordion__btn');
var modalContacts = document.querySelector('.modal');
var contactsToggle = document.querySelector('.header__btn');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var nameField = document.querySelector('.modal [type="text"]');
var overlay = document.querySelector('.modal-overlay');
var body = document.querySelector('body');


// Открытие/Закрытие аккордиона

for (var i = 0; i < accordions.length; i++) {

  accordions[i].onclick = function() {
    this.classList.toggle('accordion__btn--opened');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
}

// Модальное окно

var closeModal = function f() {
  modalContacts.style.display = 'none';
  overlay.style.display = 'none';
  body.classList.remove('overflow');
};


var openModal = function() {
  modalContacts.style.display = 'block';
  overlay.style.display='block';
  body.classList.add('overflow');

  nameField.focus();

};

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
});

contactsToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  openModal();
});

modalCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE) {
    closeModal();
  }
});

IMask(document.querySelector('#phone'), {mask: '+{7}(000)000-00-00'});
IMask(document.querySelector('#phone-modal'), {mask: '+{7}(000)000-00-00'});
