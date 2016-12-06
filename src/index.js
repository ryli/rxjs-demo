import Rx from 'rxjs/Rx'

const app$ = Rx.Observable.of(1,2,3,4,5)
  .do(r => console.log(r))

const app$_ = app$.subscribe()

// ===== event =====

const $button = document.querySelector('button')

const button$ = Rx.Observable.fromEvent($button, 'click')

const button$_ = button$.subscribe(e => {
  console.log(e)
})

const $input = document.querySelector('input')

const input$ = Rx.Observable.fromEvent($input, 'input')
  .map(e => e.target.value.trim())
  .do(val => console.log(val))

const input$_ = input$.subscribe()