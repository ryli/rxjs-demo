import Rx from 'rxjs/Rx'

const app$ = Rx.Observable.of(1,2,3,4,5)
  .do(r => console.log(r))

const app$_ = app$.subscribe()

// ===== event =====

const $button = document.querySelector('button')
const $input = document.querySelector('input')
const $result = document.querySelector('#result')

const button$ = Rx.Observable.fromEvent($button, 'click')
  .scan(count => count + 1, 0)
  .do(val => {
    console.log(val)
    $result.innerHTML = `You clicked ${val} times`
  })

const button$_ = button$.subscribe()


// problem: 不满足 filter 的条件后，result的状态还是之前的
const input$ = Rx.Observable.fromEvent($input, 'input')
  .map(e => e.target.value.trim())
  .filter(val => val.length > 2)
  .do(val => {
    console.log(val)
    $result.innerHTML = val.split('').reverse().join('')
  })

const input$_ = input$.subscribe()
