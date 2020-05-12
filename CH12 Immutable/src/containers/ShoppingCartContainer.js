import { connect } from 'react-redux';

import actions from '../actions/ShoppingCartActions';
import selectors from '../selectors/ShoppingCartSelectors';

import ShoppingCart from '../ShoppingCart';

function mapStateToProps(state) {
  return {
    cart: selectors.toCartView(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveClick: function(product){
      dispatch(actions.removeFromCart(product));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
