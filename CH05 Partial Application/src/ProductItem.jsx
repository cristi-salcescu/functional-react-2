import React from 'react';
import partial from 'lodash/partial';

function ProductItem({product, onAddClick}) {
  return (
    <div>
      <div>{product.name}</div>
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

export default ProductItem;