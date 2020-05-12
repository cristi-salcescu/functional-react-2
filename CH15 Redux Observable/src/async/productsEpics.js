//https://angular.io/guide/rx-library

import api from '../api/productsAPI';
import actions from '../actions/productsActions';
import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';

function fetchProducts( action$){
  return action$.pipe(
    ofType(actions.fetchProducts),
    mergeMap(action$ => 
        api.fetchProducts().pipe(
          map(actions.resetProducts)
        )
    )
  );
}

export default { fetchProducts };
    