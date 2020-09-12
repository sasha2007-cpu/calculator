// let x
// x = 12
// let y = 3
// let res = x / y
// let str = 'Ok'
// console.log(x)

// let sum = function (a, b) {
//   return a + b
// }

// function minus(a, b) {
//   return a - b
// }

// function print() {
//   console.log('Hello')
// }

// function some(x, r) {
//   let k = minus(x, r)
//   return k
// }

// console.log(some(12, 8))

// let mult = function (t, m) {
//   return t * m
// }

// let ki = function (g, f, d) {
//   return g * f + f / d
// }

// console.log(sum(7, 2))
// console.log(mult(10, 3))

// let r = 'Hello' + 'John'
// console.log(r)

// console.log(3 / 0)

let button_1 = document.querySelector('.btn_1')
// let button_1 = document.getElementById('c1')

let button_2 = document.querySelector('.btn_2')
let button_3 = document.querySelector('.btn_3')
let button_4 = document.querySelector('.btn_4')
let button_5 = document.querySelector('.btn_5')
let button_6 = document.querySelector('.btn_6')
let button_7 = document.querySelector('.btn_7')
let button_8 = document.querySelector('.btn_8')
let button_9 = document.querySelector('.btn_9')
let button_0 = document.querySelector('.btn_0')
let button_mult = document.querySelector('.btn_mult')
let button_plus = document.querySelector('.btn_plus')
let button_div = document.querySelector('.btn_div')
let button_reset = document.querySelector('.btn_reset')
let button_result = document.querySelector('.btn_result')

let screen = document.querySelector('.screen')

button_1.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '1'
  screen.value = result
})

button_2.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '2'
  screen.value = result
})

button_3.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '3'
  screen.value = result
})

button_4.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '4'
  screen.value = result
})

button_5.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '5'
  screen.value = result
})

button_6.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '6'
  screen.value = result
})

button_7.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '7'
  screen.value = result
})

button_8.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '8'
  screen.value = result
})

button_9.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '9'
  screen.value = result
})

button_0.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '0'
  screen.value = result
})

button_plus.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '+'
  screen.value = result
})

button_mult.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '*'
  screen.value = result
})

button_div.addEventListener('click', function () {
  let currentVal = screen.value
  let result = currentVal + '/'
  screen.value = result
})

button_reset.addEventListener('click', function () {
  screen.value = ''
})

button_result.addEventListener('click', function () {
  let currentVal = screen.value
  screen.value = eval(currentVal)
})
