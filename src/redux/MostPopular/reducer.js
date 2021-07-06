import mostPopularTypes from './types';

const INITIAL_STATE = {
  isInitializing: false,
  movies: [],
};

const mostPopularReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
  } = action;

  switch (type) {
    case mostPopularTypes.INIT_MOST_POPULAR:
      return {
        ...state,
        isInitializing: true,
      };

    case mostPopularTypes.INIT_MOST_POPULAR_ERROR:
      return {
        ...state,
        isInitializing: false,
      };

    case mostPopularTypes.INIT_MOST_POPULAR_SUCCESS:
      return {
        ...state,
        isInitializing: false,
        movies: [...action.payload.movies],
      };

    default:
      return state;
  }
};

export default mostPopularReducer;
