import React from 'react';

import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

import './App.css';

function App({products}) {
  const cart = { list: products };

  function addToCart(product) {
    console.log(`add ${product.id}`);
  }

  function removeFromCart(product) {
    console.log(`remove ${product.id}`);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList 
          products={products} 
          onAddClick={addToCart} />

        <ShoppingCart 
          cart={cart} 
          onRemoveClick={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
