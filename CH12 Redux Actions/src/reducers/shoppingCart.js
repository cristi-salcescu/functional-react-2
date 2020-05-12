import { handleActions } from 'redux-actions';
import actions from '../actions/ShoppingCartActions';

function addToCart(map, action){
    const product = action.payload;
    const newMap = { ...map };
    const quantity = getProductQuantity(map, product) + 1; 
    newMap[product.id] = { ...product, quantity };
    return Object.freeze(newMap);
}
  
function removeFromCart(map, action){
    const product = action.payload;
    const newMap = { ...map };
    delete newMap[product.id];
    return Object.freeze(newMap);
}
  
function getProductQuantity(map, product) {
    const existingProduct = map[product.id];
    return (existingProduct) ? existingProduct.quantity : 0;
}
  
export default handleActions({ 
        [actions.addToCart]: addToCart,
        [actions.removeFromCart]: removeFromCart 
    },
    {}
);








