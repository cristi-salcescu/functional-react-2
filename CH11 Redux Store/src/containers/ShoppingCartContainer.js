import { connect } from 'react-redux';

import { removeFromCart } from '../actions/ShoppingCartActions';
import { toCartView } from '../selectors/ShoppingCartSelectors';

import ShoppingCart from '../ShoppingCart';

function mapStateToProps(state) {
  return {
    cart: toCartView(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveClick: function(product){
      dispatch(removeFromCart(product));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
