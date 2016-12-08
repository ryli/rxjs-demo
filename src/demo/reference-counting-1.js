import Rx from 'rxjs/Rx'

const source$ = Rx.Observable.interval(500)

const subject$$ = new Rx.Subject()

const multicasted$$ = source$.multicast(subject$$)

let subscription1$_, subscription2$_, subscriptionConnect$_

subscription1$_ = multicasted$$.subscribe({
  next(v) {
    console.log('a', v)
  }
})

subscriptionConnect$_ = multicasted$$.connect()

setTimeout(() => {
  subscription2$_ = multicasted$$.subscribe({
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
  subscriptionConnect$_.unsubscribe()
}, 6000)