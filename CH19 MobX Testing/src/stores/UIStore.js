import { observable, action } from 'mobx';

function UIStore(){
    const state = observable({
        query : {
            text : ''
        }
    });

    function getQuery(){
        return state.query;
    }

    const setQuery = action(function(query){
        state.query = query;
    });

    return Object.freeze({
        getQuery,
        setQuery
    });
}

export default UIStore;


