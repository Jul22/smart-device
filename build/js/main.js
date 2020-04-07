'use strict';
var KEYCODE = 27;
var accordions = document.getElementsByClassName('accordion__btn');
var modalContacts = document.querySelector('.modal');
var contactsToggle = document.querySelector('.header__btn');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var nameField = document.querySelector('.modal [type="text"]');
var overlay = document.querySelector('.modal-overlay');
var body = document.querySelector('body');
var contactsForm = document.querySelector('#contacts .form');
var contactsFormModal = document.querySelector('.modal .form');
var nameInput = document.querySelector('#name');
var nameInputModal = document.querySelector('#name-modal');
var phoneInput = document.querySelector('#phone');
var phoneInputModal = document.querySelector('#phone-modal');
var messageInput = document.querySelector('#message');
var messageInputModal = document.querySelector('#message-modal');

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

if (contactsForm) {
  contactsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-field', nameInput.value);
    localStorage.setItem('phone-field', phoneInput.value);
    localStorage.setItem('message-field', messageInput.value);
  });
}

if (contactsFormModal) {
  contactsFormModal.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-modal', nameInputModal.value);
    localStorage.setItem('phone-modal', phoneInputModal.value);
    localStorage.setItem('message-modal', messageInputModal.value);
  });
}
