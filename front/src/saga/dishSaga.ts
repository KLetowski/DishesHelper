import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { DishActionTypes, IDish } from '../types/DishTypes';
import { getDishesList, url } from '../utils/apiUrl';
import { IAction } from '../reducer/rootReducer';
import { Response } from '../utils/axios';

function* getDishesAsync() {
  const response: Response<IDish[]> = yield axios.get(url(getDishesList));

  yield put({
    type: DishActionTypes.GET_DISHES_ASYNC,
    payload: {
      data: response.data,
      metadata: response.metadata
    }
  });
}

export function* getDishes() {
  yield takeLatest(DishActionTypes.GET_DISHES, getDishesAsync);
}

function* editDish(action: IAction) {
  yield put({
    type: DishActionTypes.EDIT_DISH,
    editDish: action.payload.dish
  });
}

export function* watchEditDish() {
  yield takeLatest(DishActionTypes.WATCH_EDIT_DISH, editDish);
}

function* deleteDish(action: IAction) {
  yield put({
    type: DishActionTypes.DELETE_DISH,
    payload: { index: action.payload.index }
  });
}

export function* watchDeleteDish() {
  yield takeLatest(DishActionTypes.WATCH_DELETE_DISH, deleteDish);
}
