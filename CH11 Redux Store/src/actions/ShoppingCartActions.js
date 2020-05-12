function addToCart(product) {
    return {
        type: 'ADD_TO_CART',
        product
    };
}

function removeFromCart(product) {     
    return {
        type: 'REMOVE_FROM_CART',
        product
    };
}


export { addToCart, removeFromCart };
