import { handleActions } from 'redux-actions';
import actions from '../actions'

function setCurrentProduct(state, action) {
    return action.payload;
}

export default handleActions({ 
        [actions.setCurrentProduct] : setCurrentProduct
    },
    null
);