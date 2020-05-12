import { handleActions } from 'redux-actions';
import actions from '../actions'

function setQuery(state, action) {
    return action.payload;
}

export default handleActions({ 
        [actions.setQuery] : setQuery
    },
    { text: ''}
);