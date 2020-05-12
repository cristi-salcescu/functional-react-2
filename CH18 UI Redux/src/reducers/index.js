import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import products from './products';
import query from './query';

export default combineReducers({
    shoppingCart,
    products,
    query
});