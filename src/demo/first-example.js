import Rx from 'rxjs/Rx'

const app$ = Rx.Observable.of(1,2,3,4,5)

const app$_ = app$.subscribe((r) => {
  console.log(r)
})


// ===== event =====


const $button = document.querySelector('button')
const $input = document.querySelector('input')
const $result = document.querySelector('#result')

const seconds$ = Rx.Observable.interval(1000)

const button$ = Rx.Observable.fromEvent($button, 'click')
  // .throttleTime(1000)
  // .map(e => e.clientX)

  // .pluck('target', 'tagName')

  // .pairwise()
  // .map(pair => {
  //   const dis = Math.sqrt(Math.pow(pair[0].clientX - pair[1].clientX, 2) + Math.pow(pair[0].clientY - pair[1].clientY, 2))
  //   console.log(1, pair, dis)
  //   return dis
  // })

  // .scan((count, clientX) => {
  //   console.log(clientX)
  //   return count + 1
  // }, 0)
  // .do(val => {
  //   console.log(val)
  //   $result.innerHTML = val
  // })

// const button$_ = button$.subscribe()

const sample$ = seconds$.sample(button$)
  .do(val => {
    console.log(val)
    $result.innerHTML = val
  })
const sample$_ = sample$.subscribe()

// problem: 不满足 filter 的条件后，result 的内容应该为空，现在还是之前的
// const input$ = Rx.Observable.fromEvent($input, 'input')
//   .map(e => e.target.value.trim())
//   .filter(val => val.length > 2)
//   .do(val => {
//     console.log(val)
//     $result.innerHTML = val.split('').reverse().join('')
//   })

// const input$_ = input$.subscribe()

// 解决上面问题
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
