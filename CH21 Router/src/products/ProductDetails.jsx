import React from 'react';
import partial from 'lodash/partial';
import './ProductDetails.css';

function ProductDetails({ product, onAddClick }) {
  return (
    <div className="product-details">
      <div>{product.name}</div>
      <div>Price: {product.price}</div>
      <div>
        <div>
          {product.nutrients &&
           product.nutrients.map(n => 
            <div key={n.name}>
              {n.name}: {n.value}
            </div>
          )}
        </div>
      </div>
      <div>
        <button 
          type="button" 
          onClick={partial(onAddClick, product)}>
            Add
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;