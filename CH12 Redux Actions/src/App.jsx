import React from 'react';

import Header from './Header';
import ProductList from './containers/ProductListContainer';
import ShoppingCart from './containers/ShoppingCartContainer';

import './App.css';

function App({products}) {
  return (
    <div>
      <Header />
      <div className="content">
        <ProductList products={products} />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;