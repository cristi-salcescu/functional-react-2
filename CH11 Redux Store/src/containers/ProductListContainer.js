import { connect } from 'react-redux';
import { addToCart } from '../actions/ShoppingCartActions';
import ProductList from '../ProductList';

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: function(product){
      dispatch(addToCart(product));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
