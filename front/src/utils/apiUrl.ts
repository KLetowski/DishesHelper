const server: string = 'http://localhost:3333/';

export const getDishesList: string = `api/dish/dishes`;
export const addNewDish: string = `api/dish/addNewDish`;

export const url = (url: string): string => `${server}${url}`;
