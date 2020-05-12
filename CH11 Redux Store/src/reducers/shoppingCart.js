function addToCart(map, product){
    const newMap = { ...map };
    const quantity = getProductQuantity(map, product) + 1; 
    newMap[product.id] = { ...product, quantity };
    return Object.freeze(newMap);
}
  
function removeFromCart(map, product){
    const newMap = { ...map };
    delete newMap[product.id];
    return Object.freeze(newMap);
}
  
function getProductQuantity(map, product) {
    const existingProduct = map[product.id];
    return (existingProduct) ? existingProduct.quantity : 0;
}

export default function (shoppingMap = {}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCart(shoppingMap, action.product);
        case 'REMOVE_FROM_CART':
            return removeFromCart(shoppingMap, action.product);
        default:
            return shoppingMap;
    }
}
