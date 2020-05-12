import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import actions from './actions';

function incrementProductQuantity(shoppingMap, product) {
    const quantity = getProductQuantity(shoppingMap, product) + 1;
    return Object.freeze({ ...product, quantity });
}

function getProductQuantity(shoppingMap, product) {
    const existingProduct = shoppingMap.get(product.id);
    if (existingProduct) {
        return existingProduct.quantity;
    }

    return 0;
}

function addToCart(shoppingMap, action) {
    const product = action.payload;
    const newProduct = incrementProductQuantity(shoppingMap, product);
    return shoppingMap.set(product.id, newProduct);
}

function removeFromCart(shoppingMap, action) {
    const product = action.payload;
    return shoppingMap.remove(product.id);
}

export default handleActions({ 
        [actions.addToCart] : addToCart,
        [actions.removeFromCart] : removeFromCart
    },
    Map()
);




