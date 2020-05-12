import React from 'react';

function ShoppingItem({product, onRemoveClick}) {
  return (
    <div>
        <div>{product.name}</div>
        <div>{product.quantity}</div>
        <div>
          <button 
            type="button" 
            onClick={() => onRemoveClick(product)}>
              Remove
          </button>
        </div>
    </div>
  );
}

export default ShoppingItem;