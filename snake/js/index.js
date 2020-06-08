import { Food } from './food/index.js'
import { Snake } from './snake/index.js'
window.onload = function () {
  let container = document.querySelector('.container')
  let food = new Food({}, container)

  let snake = new Snake({}, container)
  snake.init()
}