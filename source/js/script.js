'use strict';

const openButton = document.querySelector('.join-us__button--open');
const closeButton = document.querySelector('.join-us__button--close');
const text = document.querySelector('.join-us__middle-wrapper');

openButton.addEventListener('click', function () {
    openButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
    text.classList.remove('hidden');
});

closeButton.addEventListener('click', function () {
    closeButton.classList.add('hidden');
    text.classList.add('hidden');
    openButton.classList.remove('hidden');
});