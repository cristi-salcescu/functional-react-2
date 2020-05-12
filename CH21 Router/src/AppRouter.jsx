import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Products from './ProductsContainer';
import Product from './ProductContainer';

function AppRouter(){
    return (
      <Router>
        <Header />
        <Route 
          exact path="/" 
          component={Products} />
        <Route 
          path="/products/:id/" 
          component={Product} />
      </Router>
    )
}

export default AppRouter;


