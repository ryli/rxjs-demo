import Rx from 'rxjs/Rx'

const source$ = Rx.Observable.interval(500)

const subject$$ = new Rx.Subject()

const refCounted$$ = source$.multicast(subject$$).refCount()

let subscription1$_, subscription2$_, subscriptionConnect$_

console.log('a subscribed')
subscription1$_ = refCounted$$.subscribe({
  next(v) {
    console.log('a', v)
  }
})

// subscriptionConnect$_ = refCounted$$.connect()

setTimeout(() => {
  console.log('b subscribed')
  subscription2$_ = refCounted$$.subscribe({
    next(v) {
      console.log('b', v)
    }
  })
}, 800)

setTimeout(() => {
  console.log('a unsubscribed')
  subscription1$_.unsubscribe()
}, 5000)

setTimeout(() => {
  console.log('b unsubscribed')
  subscription2$_.unsubscribe()
  // subscriptionConnect$_.unsubscribe()
}, 6000)