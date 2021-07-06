import {
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import mostPopularActions from './actions';
import mostPopularTypes from './types';

function* initMostPopular() {
  try {
    yield delay(1500);

    const movies = [
      {
        id: 'tt0468569',
        title: 'Test Movie',
      },
    ];

    yield put(mostPopularActions.initMostPopularSuccess(movies));
  } catch (e) {
    yield put(mostPopularActions.initMostPopularError());
  }
}

function* mostPopularSaga() {
  yield takeLatest(mostPopularTypes.INIT_MOST_POPULAR, initMostPopular);
}

export default mostPopularSaga;
