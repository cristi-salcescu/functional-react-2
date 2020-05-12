import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';

import api from './api/productsAPI';
import ProductStore from './stores/ProductStore';
import ShoppingCartStore from './stores/ShoppingCartStore';
import UIStore from './stores/UIStore';

it('App can start app without crashing', () => {
    const rootDiv = document.createElement('div');

    const shoppingStore = ShoppingCartStore();
    const productStore = ProductStore(api);
    const uiStore = UIStore();
    const stores = {
        productStore,
        shoppingStore,
        uiStore
    };

    productStore.fetchProducts(); 

    ReactDOM.render(<Provider {...stores}><App /></Provider>, 
        rootDiv);
});