export enum DishActionTypes {
  GET_DISHES = 'GET_DISHES',
  GET_DISHES_ASYNC = 'GET_DISHES_ASYNC',
  ADD_NEW_PRODUCT_ON_LIST = 'ADD_NEW_PRODUCT_ON_LIST',
  WATCH_NEW_PRODUCT = 'WATCH_NEW_PRODUCT',
  EDIT_DISH = 'EDIT_DISH',
  WATCH_EDIT_DISH = 'WATCH_EDIT_DISH',
  WATCH_DELETE_DISH = 'WATCH_DELETE_DISH',
  DELETE_DISH = 'DELETE_DISH'
}

export interface IDish {
  name: string;
  _id: number;
  images: string;
  ingredients: string[];
  preparing: string;
  description: string;
}

export interface IDishState {
  dishes: IDish[];
  metadata: {};
  newDish: {
    productsList: string[];
  };
  selectedDish: {};
}
