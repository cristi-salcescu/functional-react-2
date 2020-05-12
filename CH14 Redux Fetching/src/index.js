import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';
import thunks from './thunks/productsThunks';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(thunks.fetchProducts());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


