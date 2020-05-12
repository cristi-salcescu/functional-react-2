import MicroEmitter from 'micro-emitter';

//pure functions
function addProductToMap(product, map){
  const newMap = { ...map };
  const quantity = getProductQuantity(product, map) + 1; 
  newMap[product.id] = { ...product, quantity };
  return Object.freeze(newMap);
}

function removeProductFromMap(product, map){
  const newMap = { ...map };
  delete newMap[product.id];
  return Object.freeze(newMap);
}

function getProductQuantity(product, map) {
  const existingProduct = map[product.id];
  return (existingProduct) ? existingProduct.quantity : 0;
}

function toCartView(map) {
  const list = Object.values(map);
  return Object.freeze({
    list,
    total: list.reduce(addPrice, 0)
  });
}

function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

function ShoppingCartStore() {
  const eventEmitter = new MicroEmitter();
  const CHANGE_EVENT = "change";

  let shoppingMap = {};

  function addToCart(product) {
    shoppingMap = addProductToMap(product, shoppingMap);
    eventEmitter.emit(CHANGE_EVENT);
  }

  function removeFromCart(product) {     
    shoppingMap = removeProductFromMap(product, shoppingMap);
    eventEmitter.emit(CHANGE_EVENT);
  }

  function onChange(handler) {
    eventEmitter.on(CHANGE_EVENT, handler);
  }

  function offChange() {
    eventEmitter.off(CHANGE_EVENT);
  }

  function get() {
    return toCartView(shoppingMap);
  }

  return Object.freeze({
    addToCart,
    removeFromCart,
    get,
    onChange,
    offChange
  });
}

export default ShoppingCartStore;