import React, {useEffect} from 'react';

import ProductDetails from './products/ProductDetailsContainer';
import ShoppingCart from './shopping-cart/ShoppingCartContainer';

import './App.css';

function Product({ id, currentProduct, onLoad }){

    useEffect(() => { 
        onLoad(id);
    },[id]);

    return (
        <div className="content">
            <div>
                { currentProduct && <ProductDetails product={currentProduct} /> }
            </div>
            <ShoppingCart />
        </div>
    )
}

export default Product;