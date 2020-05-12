import api from '../api/productsAPI';
import actions from '../actions/productsActions';

function fetchProducts() {
  return function(dispatch) {
    return api.fetchProducts()
      .then(actions.resetProducts)
      .then(dispatch);
  };
}

export default { fetchProducts };