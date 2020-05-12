import { connect } from 'react-redux';
import actions from '../actions/shoppingCartActions';
import selectors from '../selectors/productsSelectors';

import ProductList from '../ProductList';

function mapStateToProps(state) {
  return {
    products: selectors.filterProducts(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: function(product){
      dispatch(actions.addToCart(product));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
