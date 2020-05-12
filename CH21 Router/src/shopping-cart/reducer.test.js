import { Map } from 'immutable';
import actions from './actions';
import selectors from './selectors';
import shoppingCartReducer from './reducer';

test('shoppingCart() can add products', function() {
  //arrange
  const cartMap = Map();

  //act
  const addToCartAction = 
    actions.addToCart({id:1, title: 'apple', price: 10});
  const shoppingCart = 
    shoppingCartReducer(cartMap, addToCartAction);
 
  //assert
  const cart = selectors.toCartView({shoppingCart});
  expect(cart.list.count()).toEqual(1);
});


test('shoppingCart() can increment quantity', function() {
  //arrange
  let cartMap = Map();
  cartMap = shoppingCartReducer(cartMap, 
      actions.addToCart({id:1, title: 'apple', price: 10}));
  cartMap = shoppingCartReducer(cartMap, 
      actions.addToCart({id:2, title: 'mango', price: 5}));

  //act
  const addToCartAction = 
      actions.addToCart({id:1, title: 'apple', price: 10});
  const shoppingCart = 
      shoppingCartReducer(cartMap, addToCartAction);
 
  //assert
  const cart = selectors.toCartView({shoppingCart});
  expect(cart.list.count()).toEqual(2);
  expect(cart.list.first().quantity).toEqual(2);
});

test('shoppingCart() can remove product', function() {
  //arrange
  let cartMap = Map();
  cartMap = shoppingCartReducer(cartMap, 
      actions.addToCart({id:1, title: 'apple', price: 10}));
  cartMap = shoppingCartReducer(cartMap, 
      actions.addToCart({id:2, title: 'mango', price: 5}));

  //act
  const removeFromCartAction = 
      actions.removeFromCart({id:1, title: 'apple', price: 10});
  const shoppingCart = 
      shoppingCartReducer(cartMap, removeFromCartAction);
 
  //assert
  const cart = selectors.toCartView({shoppingCart});
  expect(cart.list.count()).toEqual(1);
  expect(cart.list.first().id).toEqual(2);
});