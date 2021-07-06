import { all } from 'redux-saga/effects';
import mostPopularSaga from './MostPopular/saga';

export default function* rootSaga() {
  const sagas = [
    mostPopularSaga(),
  ];

  yield all(sagas);
}
