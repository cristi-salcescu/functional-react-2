import { connect } from 'react-redux';
import thunks from './products/thunks'
import Product from "./Product";

function mapProps({currentProduct}, {match}){
    const {id} = match.params;

    return {
        id,
        currentProduct
    }
}

function mapDispatch(dispatch) {
    return {
        onLoad(id){
            dispatch(thunks.fetchProduct(id));
        }
    };
}

export default connect(
        mapProps, 
        mapDispatch
    )(Product);