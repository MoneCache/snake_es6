import { Snake } from './snake/index.js'
window.onload = function () {
  let container = document.querySelector('.container')

  let snake = new Snake({
    speed: 300
  }, container)
  snake.init()
}