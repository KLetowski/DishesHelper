import { Reducer } from 'redux';
import { DishActionTypes, IDishState, IDish } from '../types/DishTypes';
import { IAction } from './rootReducer';

const initialState: IDishState = {
  dishes: [],
  metadata: {},
  newDish: {
    productsList: []
  },
  selectedDish: {}
};

const dishReducer: Reducer<IDishState, IAction> = (
  state = initialState,
  action: IAction
) => {
  const newState = { ...state };

  switch (action.type) {
    case DishActionTypes.GET_DISHES_ASYNC:
      newState.dishes = action.payload.data;
      newState.metadata = action.payload.metadata;
      break;
    case DishActionTypes.ADD_NEW_PRODUCT_ON_LIST:
      newState.newDish.productsList.push(action.payload.product);
      break;
    case DishActionTypes.EDIT_DISH:
      newState.selectedDish = action.payload.editDish;
      break;
    case DishActionTypes.DELETE_DISH:
      newState.dishes = newState.dishes.removeFromIndex(action.payload.index);
      break;
    default:
  }
  return newState;
};

export default dishReducer;
