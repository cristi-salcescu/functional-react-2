import { combineReducers } from 'redux';
import shoppingCart from './shopping-cart/reducer';
import products from './products/reducers/productsReducer';
import query from './products/reducers/queryReducer';
import currentProduct from './products/reducers/currentProductReducer';

export default combineReducers({
    shoppingCart,
    products,
    query,
    currentProduct
});