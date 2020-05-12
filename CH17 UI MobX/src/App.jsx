import React from 'react';

import Header from './Header';
import ProductSearch from './containers/ProductSearchContainer';
import ProductList from './containers/ProductListContainer';
import ShoppingCart from './containers/ShoppingCartContainer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <ProductSearch />
          <ProductList />
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;