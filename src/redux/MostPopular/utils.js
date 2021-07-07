const mapMoviesResponse = (movies) => (
  movies.map((movie) => ({
    genre: movie.Genre,
    id: movie.imdbID,
    poster: movie.Poster,
    rating: parseFloat(movie.imdbRating),
    title: movie.Title,
    year: parseInt(movie.Year, 10),
  }))
);

const sortByRatingDescending = (movieA, movieB) => (movieB.rating - movieA.rating);

const sortMoviesByRating = (movies) => (movies.sort(sortByRatingDescending));

export default {
  mapMoviesResponse,
  sortMoviesByRating,
};
