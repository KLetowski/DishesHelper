import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import dishReducer from './dishReducer';
import { IDishState } from '../types/DishTypes';

export default combineReducers<ApplicationState>({
  form: formReducer,
  dish: dishReducer
});

export interface ApplicationState {
  dish: IDishState;
  form: FormStateMap;
}

export interface IAction {
  type: string;
  payload: any;
}
