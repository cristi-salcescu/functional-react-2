import { connect } from 'react-redux';
import thunks from './products/thunks';
import Products from './Products';

function mapDispatch(dispatch) {
  return {
      onLoad(){
          dispatch(thunks.fetchProducts());
      }
  };
}

export default connect(
      null, 
      mapDispatch
  )(Products);