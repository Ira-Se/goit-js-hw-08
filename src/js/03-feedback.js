const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

let currentValue = {};
const saveValue = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

reload();

function handlerInput(evt) {
  const { email, message } = form.elements;
  currentValue = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentValue));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  console.log(saveValue);
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}
function reload() {
  if (saveValue) {
    form.email.value = saveValue.email || '';
    form.message.value = saveValue.message || '';
  }
}
