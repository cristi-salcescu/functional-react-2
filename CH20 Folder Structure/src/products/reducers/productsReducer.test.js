import actions from '../actions';
import productsReducer from './productsReducer';

test('products() can reset all products', function() {
  //arrange
  const products = [];
  const newProducts = [
    {id:1, name: 'apple', price: 10},
    {id:2, name: 'mango', price: 5}
  ];

  //act
  const resetProductsAction = actions.resetProducts(newProducts);
  const result = productsReducer(products, resetProductsAction);

  //assert
  expect(Array.from(result)).toEqual(newProducts);
});
