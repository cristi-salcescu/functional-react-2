import actions from '../actions/queryActions';
import queryReducer from './query';

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