import { observable, action } from 'mobx';

function ShoppingCartStore(){
  const shoppingMap = observable.map();

  function toCartView() {
    return toCartViewFromMap(shoppingMap);
  }

  //actions
  const addToCart = action(function(product){
    const quantity = getProductQuantity(shoppingMap, product) + 1; 
    const newProduct = { ...product, quantity };
    shoppingMap.set(product.id, newProduct);
  });

  const removeFromCart = action(function(product){
    shoppingMap.delete(product.id);
  });

  return Object.freeze({
    addToCart,
    removeFromCart,
    toCartView
  });
}

//pure functions
function getProductQuantity(map, product) {
  const existingProduct = map.get(product.id);
  return (existingProduct) ? existingProduct.quantity : 0;
}

function toCartViewFromMap(map) {
  const list = Array.from(map.values());
  return Object.freeze({
      list,
      total: list.reduce(addPrice, 0)
  });
}

function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

export default ShoppingCartStore;
