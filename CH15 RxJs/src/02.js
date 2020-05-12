import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const observable = of(1, 2, 3, 4, 5, 6);

observable.pipe(
    filter(isEven)
  )
  .subscribe(console.log);
  //2
  //4
  //6

function isEven(n){
    return n % 2 == 0;
}