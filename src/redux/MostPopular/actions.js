import mostPopularTypes from './types';

const mostPopularActions = {
  initMostPopular: () => ({
    type: mostPopularTypes.INIT_MOST_POPULAR,
  }),
  initMostPopularError: () => ({
    type: mostPopularTypes.INIT_MOST_POPULAR_ERROR,
  }),
  initMostPopularSuccess: (movies) => ({
    type: mostPopularTypes.INIT_MOST_POPULAR_SUCCESS,
    payload: {
      movies,
    },
  }),
};

export default mostPopularActions;
