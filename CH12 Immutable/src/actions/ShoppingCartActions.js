import { createAction } from 'redux-actions';

const addToCart = createAction('addToCart');
const removeFromCart = createAction('remove_from_cart');

export default { addToCart, removeFromCart };
