import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import actions from '../actions/shoppingCartActions';

function addToCart(map, action){
    const product = action.payload;
    const quantity = getProductQuantity(map, product) + 1; 
    const newProduct = { ...product, quantity };
    return map.set(product.id, newProduct);
}
  
function removeFromCart(map, action){
    const product = action.payload;
    return map.remove(product.id);
}
  
function getProductQuantity(map, product) {
    const existingProduct = map.get(product.id);
    return (existingProduct) ? existingProduct.quantity : 0;
}
  
export default handleActions({ 
        [actions.addToCart]: addToCart,
        [actions.removeFromCart]: removeFromCart 
    },
    Map()
);