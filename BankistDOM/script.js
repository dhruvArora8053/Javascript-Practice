'use strict';

// Selection
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.querySelector('.header'));
const allSections = document.querySelectorAll('.section');
console.log(allSections);
console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

// Insert
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
const header = document.querySelector('.header');
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
header.after(message);

// Delete
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styles
message.style.backgroundColor = '#37383d';
// message.style.width= '120%'

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// Root CSS styles
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');

