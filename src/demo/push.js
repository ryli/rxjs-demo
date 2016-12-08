import Rx from 'rxjs/Rx'

const observable$ = Rx.Observable.create(observer => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  setTimeout(() => {
    observer.next(4)
    observer.complete()
  }, 1000)
})

console.log('before')
const observable$_ = observable$.subscribe({
  next: x => console.log(`got ${x}`),
  error: err => console.error(`Error: ${err}`),
  complete: () => console.log('done')
})
console.log('after')

// export default observable$_
