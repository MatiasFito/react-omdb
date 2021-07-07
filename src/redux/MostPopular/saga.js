import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import mostPopularActions from './actions';
import mostPopularTypes from './types';
import utils from './utils';

function* initMostPopular() {
  try {
    const {
      data,
    } = yield call(
      axios.get,
      '/mostPopular.json',
      { responseType: 'json' },
    );

    const movies = utils.mapMoviesResponse(data);

    yield put(mostPopularActions.initMostPopularSuccess(movies));
  } catch (e) {
    yield put(mostPopularActions.initMostPopularError());
  }
}

function* mostPopularSaga() {
  yield takeLatest(mostPopularTypes.INIT_MOST_POPULAR, initMostPopular);
}

export default mostPopularSaga;
