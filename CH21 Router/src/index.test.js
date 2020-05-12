import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import AppRouter from './AppRouter';
import rootReducer from './rootReducer';

it('App can start app without crashing', () => {
    const rootDiv = document.createElement('div');

    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk),
      ));
      
    ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, rootDiv);
});