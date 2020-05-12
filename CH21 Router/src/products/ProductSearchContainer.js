import { connect } from 'react-redux';
import actions from './actions';
import ProductSearch from './ProductSearch';

function mapStateToProps(state) {
  return {
    query: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch(query){
      dispatch(actions.setQuery(query));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSearch);
