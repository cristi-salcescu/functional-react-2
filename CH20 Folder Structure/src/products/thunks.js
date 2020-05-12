import api from './api';
import actions from './actions';

function fetchProducts() {
  return function(dispatch) {
    return api.fetchProducts()
      .then(actions.resetProducts)
      .then(dispatch);
  };
}

export default { fetchProducts };
    