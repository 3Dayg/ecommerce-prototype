import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//function addItems takes item as parameter and return an object for the reducer (action type + payload)
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})