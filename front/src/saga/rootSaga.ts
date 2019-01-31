import { getDishes, watchEditDish, watchDeleteDish } from './dishSaga';
import { fork, all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(getDishes), fork(watchEditDish), fork(watchDeleteDish)]);
}
