import Rx from 'rxjs/Rx'

const $button = document.querySelector('button')
const $input = document.querySelector('input')
const $result = document.querySelector('#result')

const input$ = Rx.Observable.fromEvent($input, 'input')
  .map(e => e.target.value.trim())

const inputInvalid$ = input$.filter(val => val.length <= 2)
  .do(val => {
    console.log(val)
    $result.innerHTML = ''
  })

const inputValid$ = input$.filter(val => val.length > 2)
  .do(val => {
    console.log(val)
    $result.innerHTML = val.split('').reverse().join('')
  })

const inputValid$_ = inputValid$.subscribe()
const inputInvalid$_ = inputInvalid$.subscribe()
