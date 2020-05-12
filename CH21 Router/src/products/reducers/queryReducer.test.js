import actions from '../actions';
import queryReducer from './queryReducer';

test('query() can set query', function() {
  //arrange
  const query = { text: '' };
  const newQuery = { text : 'apple'};

  //act
  const queryAction = actions.setQuery(newQuery);
  const result = queryReducer(query, queryAction);
  
  //assert
  expect(result).toEqual(newQuery);
});