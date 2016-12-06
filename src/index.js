import Rx from 'rxjs/Rx'

const app$ = Rx.Observable.of(1,2,3,4,5)
  .do(r => console.log(r))

app$.subscribe()