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

function calculateVolumeAndArea(number) {
  if (
    !number ||
    !Number.isInteger(number) ||
    number < 0 ||
    typeof number !== 'number'
  ) {
    return 'При вычислении произошла ошибка';
  }
  const volume = Math.pow(number, 3);
  const area = 6 * Math.pow(number, 2);
  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

function getCoupeNumber(number) {
  if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (number === 0 || number > 36) {
    return 'Таких мест в вагоне не существует';
  } else {
    for (let i = 1; i <= 9; i++) {
      if (number < i * 4) {
        return i;
      }
    }
  }
}

console.log(getCoupeNumber(33)); //9
console.log(getCoupeNumber(7)); //2
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));
