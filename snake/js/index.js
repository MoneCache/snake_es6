// import { snake } from './snake'
import { Food } from './food/index.js'
window.onload = function () {
  let container = document.querySelector('.container')
  let food = new Food({}, container)
  food.createElement()
}