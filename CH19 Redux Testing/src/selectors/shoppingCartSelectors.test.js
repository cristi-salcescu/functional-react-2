import { Map } from 'immutable';
import selectors from './shoppingCartSelectors';

test('toCartView() can compute total price', function() {
    //arrange
    let shoppingCart = Map({
        1: {id:1, title: 'apple', price: 10, quantity: 1},
        2: {id:2, title: 'mango', price: 5, quantity: 1}
    });
  
    //act
    const cart = selectors.toCartView({shoppingCart});
   
    //assert
    expect(cart.total).toEqual(15);
  });