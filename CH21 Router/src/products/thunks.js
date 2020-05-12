import api from './api';
import actions from './actions';

function fetchProducts() {
  return function(dispatch) {
    return api.fetchProducts()
      .then(actions.resetProducts)
      .then(dispatch);
  };
}

function fetchProduct(id) {
  return function(dispatch) {
    return api.fetchProduct(id)
      .then(actions.setCurrentProduct)
      .then(dispatch);
  };
}

export default { fetchProducts, fetchProduct };
    