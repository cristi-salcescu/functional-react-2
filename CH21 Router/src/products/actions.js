import { createAction } from 'redux-actions';

const resetProducts = createAction('resetProducts');
const setQuery = createAction('setQuery');
const setCurrentProduct = createAction('setCurrentProduct');

export default { resetProducts, setQuery, setCurrentProduct };