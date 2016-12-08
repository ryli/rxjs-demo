const fimport Rx from 'rxjs/Rx'

oo$ = Rx.Observable.create(observer => {
  console.log('Hello')
  observer.next(42)
})

const foo1$_ = foo$.subscribe((x) => console.log(x, 1))
const foo2$_ = foo$.subscribe((y) => console.log(y, 2))
