import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import thunks from './thunks/productsThunks';

import App from './App';

it('App can start app without crashing', () => {
    const rootDiv = document.createElement('div');

    const store = createStore(rootReducer, applyMiddleware(thunk));
    store.dispatch(thunks.fetchProducts());

    ReactDOM.render(<Provider store={store}><App /></Provider>, rootDiv);
});