import { createAction } from 'redux-actions';

const addToCart = createAction('addToCart');
const removeFromCart = createAction('removeFromCart');

export default { addToCart, removeFromCart };
