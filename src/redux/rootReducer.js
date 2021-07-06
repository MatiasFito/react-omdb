import { combineReducers } from 'redux';
import mostPopularReducer from './MostPopular/reducer';

const rootReducer = combineReducers({
  mostPopular: mostPopularReducer,
});

export default rootReducer;
