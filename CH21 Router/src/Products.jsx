import React, {useEffect} from 'react';

import ProductSearch from './products/ProductSearchContainer';
import ProductList from './products/ProductListContainer';
import ShoppingCart from './shopping-cart/ShoppingCartContainer';

import './App.css';

function Products({onLoad}) {

  useEffect(() => { 
    onLoad();
  },[]);

  return (
      <div className="content">
        <div>
          <ProductSearch />
          <ProductList />
        </div>
        <ShoppingCart />
      </div>
  );
}

export default Products;