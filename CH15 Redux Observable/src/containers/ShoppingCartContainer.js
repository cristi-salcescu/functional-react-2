import { connect } from 'react-redux';

import actions from '../actions/shoppingCartActions';
import selectors from '../selectors/shoppingCartSelectors';
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
