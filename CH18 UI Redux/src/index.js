import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import thunks from './thunks/productsThunks';

import App from './App';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));
store.dispatch(thunks.fetchProducts());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


