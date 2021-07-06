import { combineReducers } from 'redux';
import mostPopularReducer from './MostPopular/reducer';

const rootReducer = combineReducers({
  MostPopular: mostPopularReducer,
});

export default rootReducer;
