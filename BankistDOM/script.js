'use strict';

// Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // section1.scrollIntoView({ behavior: 'smooth' });
  const s1coords = section1.getBoundingClientRect();

  // window.scrollTo(
  //   window.pageXOffset + s1coords.left,
  //   window.pageYOffset + s1coords.top
  // );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  //clearing all the tabs movement:
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  //adding active to clicked tab
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
