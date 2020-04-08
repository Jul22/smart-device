'use strict';
var KEYCODE = 27;
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
var site = document.querySelector('.accordion-site');
var siteButton = document.querySelector('.accordion__btn--site');
var office = document.querySelector('.accordion-office');
var officeButton = document.querySelector('.accordion__btn--office');
var aboutSiteTitle = document.querySelector('.accordion-site h3');
var aboutOfficeTitle = document.querySelector('.accordion-office h3');

// Открытие/Закрытие аккордиона
var showSiteMenu = function () {
  if (site.classList.contains('accordion-site--closed')) {
    if (office.classList.contains('accordion-office--opened')) {
      office.classList.add('accordion-office--closed');
      office.classList.remove('accordion-office--opened');
    }
    site.classList.remove('accordion-site--closed');
    site.classList.add('accordion-site--opened');
  } else {
    site.classList.add('accordion-site--closed');
    site.classList.remove('accordion-site--opened');
  }
};

var showSiteOffice = function () {
  if (office.classList.contains('accordion-office--closed')) {
    if (site.classList.contains('accordion-site--opened')) {
      site.classList.add('accordion-site--closed');
      site.classList.remove('accordion-site--opened');
    }
    office.classList.remove('accordion-office--closed');
    office.classList.add('accordion-office--opened');
  } else {
    office.classList.add('accordion-office--closed');
    office.classList.remove('accordion-office--opened');
  }
};

siteButton.addEventListener('click', showSiteMenu);
officeButton.addEventListener('click', showSiteOffice);
aboutSiteTitle.addEventListener('click', showSiteMenu);
aboutOfficeTitle.addEventListener('click', showSiteOffice);

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
