import React from 'react';
import ShoppingItem from './ShoppingItem';

import './ShoppingCart.css';

function ShoppingCart({cart, onRemoveClick}) {
  return (
    <div className="shopping-cart">
      <div>
        {cart.list.map(product => 
          <ShoppingItem 
            key={product.id}
            product={product}
            onRemoveClick={onRemoveClick}
          />
        )}
      </div>
      <div className="shopping-cart-total">Total: {cart.total}</div>
    </div>
  );
}

export default ShoppingCart;