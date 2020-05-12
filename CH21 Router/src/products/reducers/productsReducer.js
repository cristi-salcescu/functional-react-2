import { handleActions } from 'redux-actions';
import actions from '../actions'

function resetProducts(products, action) {
    return action.payload;
}

export default handleActions({ 
        [actions.resetProducts]: resetProducts
    },
    []
);


