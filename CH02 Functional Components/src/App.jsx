import React from 'react';
import Header from './Header';
import ProductItem from './ProductItem';

const product = {
  id: 1,
  name : 'mango'
};

function App() {
  return (
    <div>
      <Header />
      <div>
        <ProductItem product={product}></ProductItem>
      </div>
    </div>
  );
}

export default App;
