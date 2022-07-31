// #1

function extractCurrencyValue(param) {
  let maxLength = 16;
  const num = +param.replace(/\D/g, '');
  if (num.toString().length >= maxLength) {
    return BigInt(num);
  } else {
    return num;
  }
}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n

// #2

let object = {
  name: 'Ann',
  age: 16,
  hobbies: undefined,
  degree: null,
  isChild: false,
  isTeen: true,
  isAdult: false,
};

function clearObject(obj) {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }

// #3

function getUnique(param) {
  return Symbol(param);
}

console.log(getUnique('Test')); // Symbol('Test')

// #4

function countBetweenTwoDays(startDate, endDate) {
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);
  let diff = date2.getTime() - date1.getTime();
  let ms = 1000;
  let sec = 60;
  let min = 60;
  let hour = 24;
  let week = 7;
  let month = 30;
  let days = Math.round(diff / (ms * sec * min * hour));
  let weeks = Math.round(days / week);
  let months = Math.round(days / month);

  return `The difference between dates is: ${days} day(-s), ${weeks} week(-s), ${months} month(-s)`;
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)

// #5

function filterArray(arr) {
  let newArr = [...new Set(arr)];
  return newArr;
}

function filterArray1(arr) {
  let newArr = arr.filter((i, index) => {
    return arr.indexOf(i) === index;
  });
  return newArr;
}

console.log(filterArray([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 4, 5, 6, 7, 8, 9]

``