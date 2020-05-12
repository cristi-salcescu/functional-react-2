import React from 'react';
import './App.css';

import Header from './Header';
import ProductSearch from './products/containers/ProductSearchContainer';
import ProductList from './products/containers/ProductListContainer';
import ShoppingCart from './shopping-cart/containers/ShoppingCartContainer';

export default function App() {
  return (
    <div>
      <Header />
      <div className='content'>
        <div>
          <ProductSearch />
          <ProductList />
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
}
