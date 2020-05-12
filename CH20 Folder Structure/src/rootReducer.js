import { combineReducers } from 'redux';
import shoppingCart from './shopping-cart/reducer';
import products from './products/reducers/productsReducer';
import query from './products/reducers/queryReducer';

export default combineReducers({
    shoppingCart,
    products,
    query
});