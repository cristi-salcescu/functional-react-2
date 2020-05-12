import { connect } from 'react-redux';

import actions from '../actions/ShoppingCartActions';
import ProductList from '../ProductList';

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: function(product){
      dispatch(actions.addToCart(product));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
