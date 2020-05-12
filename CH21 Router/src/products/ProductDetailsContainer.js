import { connect } from 'react-redux';
import actions from '../shopping-cart/actions';
import ProductDetails from './ProductDetails';

function mapDispatch(dispatch) {
  return {
    onAddClick(product){
        dispatch(actions.addToCart(product));
    }
  };
}

export default connect(
    null,
    mapDispatch
)(ProductDetails);
