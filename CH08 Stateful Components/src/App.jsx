import React, {useState} from 'react';

import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

import './App.css';

function App({products}) {
  const [shoppingMap, setShoppingMap] = useState({});

  function addToCart(product) {
    setShoppingMap(map => addProductToMap(map, product));
  }

  function removeFromCart(product) {
    setShoppingMap(map => removeProductFromMap(map, product));
  }

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList 
          products={products} 
          onAddClick={addToCart} />

        <ShoppingCart 
          cart={toCartView(shoppingMap)}
          onRemoveClick={removeFromCart} />
      </div>
    </div>
  );
}

//pure
function addProductToMap(map, product){
  const newMap = { ...map };
  const quantity = getProductQuantity(map, product) + 1; 
  newMap[product.id] = { ...product, quantity };
  return Object.freeze(newMap);
}

function removeProductFromMap(map, product){
  const newMap = { ...map };
  delete newMap[product.id];
  return Object.freeze(newMap);
}

function getProductQuantity(map, product) {
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

export default App;
