import { createAction } from 'redux-actions';

const resetProducts = createAction('resetProducts');
const setQuery = createAction('setQuery');

export default { resetProducts, setQuery };