import { createAction } from 'redux-actions';

const resetProducts = createAction('resetProducts');
const fetchProducts = createAction('fetchProducts');

export default { resetProducts, fetchProducts };


