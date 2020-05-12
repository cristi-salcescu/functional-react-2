import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingCart({cart, onRemoveClick}) {
  return (
    <div>
      <div>
        {cart.list.map(product => 
          <ShoppingItem 
            key={product.id}
            product={product}
            onRemoveClick={onRemoveClick}
          />
        )}
      </div>      
      <div>Total: {cart.total}</div>
    </div>
  );
}

export default ShoppingCart;