import { connect } from 'react-redux';
import actions from '../../shopping-cart/actions';
import selectors from '../selectors';
import ProductList from '../components/ProductList';

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
