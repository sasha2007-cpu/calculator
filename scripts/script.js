// if (false) {
//   console.log('Ok')
// } else {
//   console.log('Booom')
// }

let isResult = false
let screen = document.querySelector('.screen')

function printNumberInScreen(num) {
  if (isResult == false) {
    let currentVal = screen.value
    let result = currentVal + num
    screen.value = result
  } else {
    reset()
    isResult = false
    screen.value = num
  }
}

function reset() {
  screen.value = ''
}

function result() {
  let currentVal = screen.value
  screen.value = eval(currentVal)
  isResult = true
  console.log(isResult)
}
