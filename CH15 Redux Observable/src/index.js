import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';
import actions from './actions/productsActions';
import epics from './async/productsEpics';

const rootEpic = combineEpics(epics.fetchProducts);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

store.dispatch(actions.fetchProducts());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


