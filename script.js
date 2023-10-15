'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

//All string methods that we learned:
//1. indexOf
//2. slice()
//3. toLowerCase()
//4. toUpperCase()
//5. trim()
//6. trimStart() and trimEnd()
//7. replace()
//8. replaceAll()
//9. includes()
//10. startsWith()
//11. endsWith()
//12. split()
//13. join()
//14. padStart()
//15. padEnd()
//16. repeat()

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🛑  Delayed Departure FAO to TXL (11h25)
//             Arrival BRU to FAO (11h45)
// 🛑  Delayed Arrival HEL to FAO (12h05)
//            Departure FAO to LIS (12h30)

console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000; i++) {
    console.log(res);
  }
});
console.log('Test end');


