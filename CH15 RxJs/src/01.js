import { Observable } from 'rxjs';

const observable = Observable.create(function(source) {
  source.next(1);
  source.next(2);
  setTimeout(() => {
    source.next(3);
    source.complete();
  }, 1000)
});

observable.subscribe(console.log);
//1
//2
//3 after 1 second