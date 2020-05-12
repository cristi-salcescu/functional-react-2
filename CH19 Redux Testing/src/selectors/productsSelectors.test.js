import { List } from 'immutable';
import selectors from './productsSelectors';

test('toCartView() can compute total price', function() {
    //arrange
    const products = List([
      {id:1, name: 'apple', price: 10},
      {id:2, name: 'mango', price: 5}
    ]);
    const query = {text: 'app'};
  
    //act
    const result = selectors.filterProducts({products, query});

    //assert
    expect(result).toEqual(List([ 
        {id:1, name: 'apple', price: 10}
    ]));
  });