import React from 'react';

import Header from './Header';
import ProductList from './ProductList';

function App({products}) {
  return (
    <div>
      <Header />
      <div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
