import { connect } from "react-redux";

import selectors from './selectors';
import actions from "../shopping-cart/actions";

import ProductList from "./ProductList";

function mapState(state) {
  return {
    products: selectors.filterProducts(state)
  };
}

function mapDispatch(dispatch) {
  return {
    onAddClick(product){
      dispatch(actions.addToCart(product));
    }
  };
}

export default connect(
  mapState,
  mapDispatch
)(ProductList);
