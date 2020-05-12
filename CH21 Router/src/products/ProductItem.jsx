import React from 'react';
import partial from 'lodash/partial';
import { Link } from 'react-router-dom';

import './ProductItem.css';

function ProductItem({product, onAddClick}) {
  return (
    <div className="product-list-item">
      <Link to={`/products/${product.id}/`}>
        {product.name}
      </Link>
      <div><button type="button" onClick={partial(onAddClick, product)}>Add</button></div>
    </div>
  );
}

export default ProductItem;