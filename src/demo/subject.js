import Rx from 'rxjs/Rx'

const subject$$ = new Rx.Subject()

subject$$.subscribe({
  next(v) {
    console.log('a', v)
  }
})

subject$$.subscribe({
  next(v) {
    console.log('b', v)
  }
})

subject$$.next(1)
subject$$.next(2)

const observale$ = Rx.Observable.from([4, 5, 6])

observale$.subscribe(subject$$)
