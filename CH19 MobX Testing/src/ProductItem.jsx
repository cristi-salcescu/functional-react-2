import React from 'react';

import './ProductItem.css';

function ProductItem({product, onAddClick}) {
  return (
    <div className="product-list-item">
      <div>{product.name}</div>
      <div>
        <button 
          type="button" 
          onClick={() => onAddClick(product)}>
            Add
        </button>
      </div>
    </div>
  );
}

export default ProductItem;