let screen = document.querySelector('.screen')

function printNumberInScreen(num) {
  let currentVal = screen.value
  let result = currentVal + num
  screen.value = result
}

function reset() {
  screen.value = ''
}

function result() {
  let currentVal = screen.value
  screen.value = eval(currentVal)
}
