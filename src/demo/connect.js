import Rx from 'rxjs/Rx'

const source$ = Rx.Observable.from([1, 2, 3])

const subject$$ = new Rx.Subject()

const multicasted = source$.multicast(subject$$)

multicasted.subscribe({
  next(v) {
    console.log('a', v)
  }
})

multicasted.subscribe({
  next(v) {
    console.log('b', v)
  }
})

const subscription$_ = multicasted.connect()

subscription$_.unsubscribe()
