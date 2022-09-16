// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
//   lastFilm = prompt('Один из последних посмотреных фильмов', ''),
//   latsFilmMark = prompt('На сколько оцение его?', '');

// const personaMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// personaMovieDB.movies[lastFilm] = +latsFilmMark;

// console.log(personaMovieDB);

// let lengthAsterix = 8,
//   result = '';

// for (let i = 1; i < lengthAsterix; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// for (let j = 20; j >= 10; j--) {
//   if (j === 13) {
//     break;
//   }
//   console.log(j);
// }

// for (let k = 2; k <= 10; k += 2) {
//   console.log(k);
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let t = 2;
// while (t < 16) {
//   t++;
//   if (t % 2 !== 0) {
//     console.log(t);
//   }
// }

// const arr = [];

// for (let i = 5; i <= 10; i++) {
//   arr.push(i);
// }

// console.log('arr', arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i]);
// }
// console.log('arr', arr);
// console.log('result', result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === 'number') {
//     data[i] *= 2;
//   } else {
//     data[i] += ' - done';
//   }
// }

// console.log('data', data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = data.length - 1; i >= 0; i--) {
//   result.push(data[i]);
// }

// console.log('data', data);
// console.log('result', result);

//const lines = 5;
//let result = '';
// for (let i = 1; i <= lines + 1; i++) {
//   for (let j = lines + 1 - i; j > 0; j--) {
//     result += ' ';
//   }
//   for (let k = 0; k < i; k++) {
//     result += '*';
//   }
//   for (let k = 1; k < i; k++) {
//     result += '*';
//   }
//   result += '\n';
// }

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += ' ';
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);

// let numberOfFilms = '',
//   lastFilm = '',
//   lastFilmMark = '';

// numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personaMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   lastFilm = prompt('Один из последних посмотреных фильмов', '');
//   lastFilmMark = +prompt('На сколько оцение его?', '');

//   if (lastFilm && lastFilm.length < 50 && lastFilmMark) {
//     personaMovieDB.movies[lastFilm] = +lastFilmMark;
//   } else {
//     i--;
//   }
// }
// let i = 0;
// do {
//   lastFilm = prompt('Один из последних посмотреных фильмов', '');
//   lastFilmMark = +prompt('На сколько оцение его?', '');
//   if (lastFilm && lastFilm.length < 50 && lastFilmMark) {
//     i++;
//     personaMovieDB.movies[lastFilm] = +lastFilmMark;
//   }
// } while (i < 2);

// while (i < 2) {
//   lastFilm = prompt('Один из последних посмотреных фильмов', '');
//   lastFilmMark = +prompt('На сколько оцение его?', '');
//   if (lastFilm && lastFilm.length < 50 && lastFilmMark) {
//     i++;
//     personaMovieDB.movies[lastFilm] = +lastFilmMark;
//   }
// }

// personaMovieDB.movies[lastFilm] = +lastFilmMark;

// while (!numberOfFilms || !lastFilm || lastFilm.length > 50 || !lastFilmMark) {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   lastFilm = prompt('Один из последних посмотреных фильмов', '');
//   lastFilmMark = +prompt('На сколько оцение его?', '');
// }

// if (personaMovieDB.count < 10) {
//   window.alert('Просмотренно довольно мало фильмов');
// } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
//   window.alert('Вы класический зритель');
// } else if (personaMovieDB.count > 30) {
//   window.alert('Вы киноман');
// } else {
//   window.alert('Произошла ошибка');
// }

// console.log(personaMovieDB);

// function getMathResult(a, b) {
//   if (b <= 0 || typeof b != 'number') {
//     return a;
//   }
//   let string = `${a}`;
//   for (let i = 2; i <= b; i++) {
//     const result = a * i;
//     string += `---${result}`;
//   }
//   return string;
// }
// console.log(getMathResult(5, 3));
// console.log(getMathResult(3, 10));
// console.log(getMathResult(10, 5));
// console.log(getMathResult(10, '5'));
// console.log(getMathResult(10, 0));
// console.log(getMathResult(20, -5));

// let numberOfFilms = 0,
//   lastFilm = '',
//   lastFilmMark = '';

// function start() {
//   while (!numberOfFilms) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// start();

// const personaMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyfilms() {
//   for (let i = 0; i < 2; i++) {
//     lastFilm = prompt('Один из последних посмотреных фильмов', '');
//     lastFilmMark = +prompt('На сколько оцение его?', '');

//     if (lastFilm && lastFilm.length < 50 && lastFilmMark) {
//       personaMovieDB.movies[lastFilm] = +lastFilmMark;
//     } else {
//       i--;
//     }
//   }
// }

// rememberMyfilms();

// function writeYourGenres(obj) {
//   while (obj.genres.length < 3) {
//     obj.genres.push(
//       prompt(`Ваш любимый жанр под номером ${obj.genres.length + 1}`)
//     );
//   }
// }

// writeYourGenres(personaMovieDB);

// function detectPersonalLvl() {
//   if (personaMovieDB.count < 10) {
//     window.alert('Просмотренно довольно мало фильмов');
//   } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
//     window.alert('Вы класический зритель');
//   } else if (personaMovieDB.count > 30) {
//     window.alert('Вы киноман');
//   } else {
//     window.alert('Произошла ошибка');
//   }
// }

// detectPersonalLvl();

// function showMyDB(obj) {
//   if (!obj?.privat) {
//     console.log(obj);
//   }
// }

// showMyDB(personaMovieDB);

// function calculateVolumeAndArea(number) {
//   if (
//     !number ||
//     !Number.isInteger(number) ||
//     number < 0 ||
//     typeof number !== 'number'
//   ) {
//     return 'При вычислении произошла ошибка';
//   }
//   const volume = Math.pow(number, 3);
//   const area = 6 * Math.pow(number, 2);
//   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('15'));
// console.log(calculateVolumeAndArea(-15));

// function getCoupeNumber(number) {
//   if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
//     return 'Ошибка. Проверьте правильность введенного номера места';
//   } else if (number === 0 || number > 36) {
//     return 'Таких мест в вагоне не существует';
//   } else {
//     // for (let i = 1; i <= 9; i++) {
//     //   if (number < i * 4) {
//     //     return i;
//     //   }
//     // }
//     return Math.ceil(number / 4);
//   }
// }

// console.log(getCoupeNumber(33)); //9
// console.log(getCoupeNumber(7)); //2
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber('Hello'));

// function getTimeFromMinutes(number) {
//   if (number < 0 || !Number.isInteger(number) || typeof number !== 'number') {
//     return 'Ошибка, проверьте данные';
//   }
//   const hours = Math.floor(number / 60);
//   const minutes = number % 60;

//   let message = '';
//   if (hours === 1) {
//     message = 'час';
//   } else if (hours > 0 && hours < 5) {
//     message = 'часа';
//   } else {
//     message = 'часов';
//   }
//   return `Это ${hours} ${message} и ${minutes} минут`;
// }
// console.log(getTimeFromMinutes(90));
// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(-150));
// console.log(getTimeFromMinutes(600));

// function findMaxNumber(...numbers) {
//   for (let number of numbers) {
//     if (typeof number !== 'number') {
//       return 0;
//     }
//   }
//   if (numbers.length < 4) {
//     return 0;
//   }
//   const result = Math.max(...numbers);
//   return result;
// }

// console.log(findMaxNumber(1, 5, 6.6, 11));
// console.log(findMaxNumber(1, 5, '6', '10'));
// console.log(findMaxNumber(1, 5, 11));

// function fib(number) {
//   if (typeof number !== 'number' || number === 0 || !Number.isInteger(number)) {
//     return '';
//   } else if (number === 1) {
//     return '0';
//   } else {
//     let result = [0, 1];
//     for (let i = 1; i < number - 1; i++) {
//       result.push(Number(result[i - 1]) + Number(result[i]));
//     }
//     const string = result.join(' ');
//     return string;
//   }
// }

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib('r'));
// console.log(fib(2));
// console.log(fib(4));
// console.log(fib(7));

// function LinearSearch(t, A) {
//   let n = A.length;
//   let i = 0;

//   while (A[i] !== t) {
//     i++;
//   }
//   if (i < n) {
//     return i;
//   } else {
//     return -1;
//   }
// }

// console.log(LinearSearch(6, [2, 4, 6, 9, 8]));

// function BinarySearch(t, A) {
//   let i = 0,
//     j = A.length,
//     k;

//   while (i < j) {
//     k = Math.floor((i + j) / 2);
//     if (t <= A[k]) {
//       j = k;
//     } else {
//       i = k + 1;
//     }
//   }

//   if (A[i] === t) {
//     return i;
//   } else {
//     return -1;
//   }
// }

// console.log(BinarySearch(6, [2, 4, 6, 9, 8]));

// function InterpolationSearch(t, A) {
//   // t - искомый элемент,
//   // A - упорядоченный массив, в котором ищем.
//   var mid,
//     low = 0,
//     high = A.length - 1;

//   while (A[low] < t && A[high] > t) {
//     mid = low + Math.floor(((t - A[low]) * (high - low)) / (A[high] - A[low]));
//     if (A[mid] < t) low = mid + 1;
//     else if (A[mid] > t) high = mid - 1;
//     else return mid;
//   }

//   if (A[low] === t) return low; // На выходе индекс искомого элемента.
//   else if (A[high] === t)
//     return high; // Если искомого элемента нет в массиве, то -1.
//   else return -1;
// }

// const personalPlanPeter = {
//   name: 'Peter',
//   age: '29',
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%',
//     },
//     exp: '1 month',
//   },
//   showAgeAndLangs(obj) {
//     const languages = obj.skills.languages.join(' ').toUpperCase();
//     return `Мне ${obj.age} и я владею языками: ${languages}`;
//   },
// };

// const showExperience = ({ skills: { exp } }) => exp;
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs({ skills: { programmingLangs } }) {
//   let string = '';
//   for (let lang in programmingLangs) {
//     string += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`;
//   }
//   return string;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   if (arr.length === 0) {
//     return 'Семья пуста';
//   }
//   const familyMembers = arr.join(' ');
//   return `Cемья состоит из: ${familyMembers}`;
// }

// function showFamilys(arr) {
//   let str = '';

//   arr.length === 0 ? (str = 'Семья пуста') : (str = 'Семья состоит из: ');

//   arr.forEach(member => {
//     str += `${member} `;
//   });

//   return str;
// }

// console.log(showFamily(family));
// console.log(showFamilys(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach(a => console.log(a.toLowerCase()));
// }

// console.log(standardizeStrings(favoriteCities));

// const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof str !== 'string') {
//     return 'Ошибка!';
//   }
//   return str.split('').reverse().join('');
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY', 'USD', 'EUR'];

// function availableCurr(arr, missingCurr) {
//   const newArr = [...arr];
//   if (arr.length === 0) {
//     return 'Нет доступных валют';
//   }
//   if (arguments.length === 2) {
//     const indexToDelete = arr.indexOf(missingCurr);
//     newArr.splice(indexToDelete, 1);
//   }

//   return `Доступные валюты: \n${newArr.join('\n')}`;
// }

// console.log(availableCurr(additionalCurrencies, 'CNY'));

// const personaMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start() {
//     while (!this.count) {
//       this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//     this.rememberMyfilms();
//   },

//   rememberMyfilms() {
//     for (let i = 0; i < 2; i++) {
//       let lastFilm = prompt('Один из последних посмотреных фильмов', '');
//       let lastFilmMark = +prompt('На сколько оцение его?', '');

//       if (lastFilm && lastFilm.length < 50 && lastFilmMark) {
//         this.movies[lastFilm] = +lastFilmMark;
//       } else {
//         i--;
//       }
//     }
//     this.writeYourGenres();
//   },
//   writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//       const request = prompt(`Ваш любимый жанр под номером ${i}`);
//       if (!request) {
//         i--;
//       } else {
//         this.genres.push(request);
//       }
//     }
//     this.genres.forEach((ganre, index) =>
//       console.log(`Любимый жанр # ${index + 1} - Это ${ganre}`)
//     );
//     this.detectPersonalLvl();
//   },
//   detectPersonalLvl() {
//     this.showMyDB();

//     if (this.count < 10) {
//       window.alert('Просмотренно довольно мало фильмов');
//     } else if (this.count >= 10 && this.count <= 30) {
//       window.alert('Вы класический зритель');
//     } else if (this.count > 30) {
//       window.alert('Вы киноман');
//     } else {
//       window.alert('Произошла ошибка');
//     }
//   },
//   showMyDB() {
//     if (!this?.privat) {
//       console.log(this);
//     }
//   },
//   toggleVisibleMyDb() {
//     this.privat = !this.privat;
//   },
// };
// // personaMovieDB.start();
// personaMovieDB.toggleVisibleMyDb();
// // personaMovieDB.start();
// personaMovieDB.toggleVisibleMyDb();
// // personaMovieDB.start();

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough({ shops, height, moneyPer1m3, budget }) {
  const allShopsVolume = [...shops].reduce((acc, { width, length }) => {
    return (acc += width * length * height * moneyPer1m3);
  }, 0);
  return budget - allShopsVolume > 0
    ? 'Бюджета достаточно'
    : 'Бюджета недостаточно';
}

console.log(isBudgetEnough(shoppingMallData));
