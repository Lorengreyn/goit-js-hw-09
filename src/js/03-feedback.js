const throttle = require('lodash.throttle');

const form = document.querySelector('form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';

updateForm();
form.addEventListener('submit', submitData);
form.addEventListener('input', throttle(saveData, 500));

function saveData() {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}

function updateForm() {
  const getData = JSON.parse(localStorage.getItem(localStorageKey));
  email.value = getData?.email || '';
  textarea.value = getData?.message || '';
}

function submitData(event) {
  event.preventDefault();

  const getData = JSON.parse(localStorage.getItem(localStorageKey));

  console.log(getData);

  form.reset();
  localStorage.clear();
}