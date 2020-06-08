class Snake {
  constructor (obj, el) {
    this.position = 'absolute'
    this.size = 3
    // 这个是记录蛇头的位置
    this.x = 60
    this.y = 0
    this.direction = 'left'
    this.speed = 1000
    this.el = el
  }

  init () {
    this.createSnakeContainer()
  }

  createSnakeContainer () {
    const div = document.createElement('div')
    div.style.position = this.position
    div.style.top = this.y
    div.style.left - this.x
    this.createSnakeHead(div)
    this.createSnakeBody(div)
    this.el.appendChild(div)
  }
  createSnakeHead (el) {
   new SnakeFestival({
      left: this.x,
      top: this.y,
      color: 'green'
    }, el)
  }
  createSnakeBody (el) {
    for (let i = 0; i < this.size - 1; i ++) {
      new SnakeFestival({
        left: this.x - (i + 1) * 20,
        top: this.y
      }, el)
    }
  }

  leave (direction) {
    this.direction = direction
    if (this.direction === 'left') {
      // 需要找到蛇头的位置
      this.zise = 0
    }

  }
  startGo () {

  }
}
class SnakeFestival {
  constructor(obj, el) {
    this.width = 20
    this.height = 20
    this.position = 'absolute'
    this.x = obj.left || 0
    this.y = obj.top || 0
    this.el = el
    this.color = obj.color || 'blue'
    this._init()
  }
  _init () {
    this.createSnakeFestival(this.el)
  }
  createSnakeFestival (el) {
    const div = document.createElement('div')
    div.style.position = this.position
    div.style.width = this.width + 'px'
    div.style.height = this.height + 'px'
    div.style.top = this.y + 'px'
    div.style.left = this.x + 'px'
    div.style.backgroundColor = this.color
    el.appendChild(div)
  }
}

export { Snake }