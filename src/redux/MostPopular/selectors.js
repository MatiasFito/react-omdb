import utils from './utils';

const mostPopularSelectors = {
  selectMovies: ({ MostPopular }) => utils.sortMoviesByRating(MostPopular.movies),
};

export default mostPopularSelectors;
