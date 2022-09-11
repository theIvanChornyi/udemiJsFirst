const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
  lastFilm = prompt('Один из последних посмотреных фильмов', ''),
  latsFilmMark = prompt('На сколько оцение его?', '');

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personaMovieDB.movies[lastFilm] = +latsFilmMark;

console.log(personaMovieDB);
