class Snake {
  constructor (obj, el) {
    this.position = 'absolute'
    this.size = 3
    // 这个是记录蛇头的相关信息
    this.width = 20
    this.height = 20
    this.interval = null
    this.x = this.width * (this.size - 1) // 减去1代表, 蛇头是正方形, 初始化时, 蛇头右上方的顶点坐标才是蛇头的正确位置
    this.y = 0
    this.direction = 'left'
    this.step = obj.step || 10
    this.speed = obj.speed || 1000
    this.el = el
    this.ele = null
  }

  init () {
    this.createSnakeContainer()
    this.autoPerform()
    this.keyboard()
  }

  createSnakeContainer () {
    const div = document.createElement('div')
    this.ele = div
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

  move (direction) {
    this.direction = direction
    if (this.direction === 'right') {
      this.moveRight()
    }
    else if (this.direction === 'left') {
     this.moveLeft()
    }
    else if (this.direction === 'top') {
      this.moveTop()
     }
     else if (this.direction === 'bottom') {
      this.moveBottom()
     }

  }
  moveLeft () {
    // 1 像左移动, 必须保证, 蛇头的位置 要大于自身长度 * 蛇节的个数,才可以移动
    // 1.1 像左移动, x的值为 0 时, 游戏结束
    if ((this.size - 1) * this.width > this.x) {
      if (this.x > 0) {
        his.x -= this.step
      }
      else {
        clearInterval(this.interval)
        alert('游戏结束!!')
      }
    }
  }
  moveRight () {
     if (this.x < (this.el.offsetWidth - this.width)) {
      this.x += this.step
    }
    else {
      clearInterval(this.interval)
      alert('游戏结束!!')
    }
  }
  moveBottom () {
    if (this.y < this.el.offsetHeight) {
      this.y += this.step
    }
    else {
      clearInterval(this.interval)
      alert('游戏结束!!')
    }
  }
  moveTop () {
    if (this.y > 0) {
      this.y -= this.step
    }
    else {
      clearInterval(this.interval)
      alert('游戏结束!!')
    }
  }
  autoPerform () {
    this.interval = setInterval(() => {
      const nodes = this.ele.childNodes
      if (nodes.length > 0) {
        for (var i = nodes.length - 1; i >= 0; i--) {
          this.ele.removeChild(nodes[i]);
        }
      }
      this.move(this.direction)
      this.createSnakeContainer()
    }, this.speed)
  }
  // 键盘事件处理
  keyboard () {
    document.addEventListener('keyup', (event) => {
      let e = event || window.event
      if (e.key === 'ArrowUp') {
        this.direction = 'top'
      }
      else if (e.key === 'ArrowDown') {
        this.direction = 'bottom'
      }
      else if (e.key === 'ArrowLeft') {
        this.direction = 'left'
      }
      else if (e.key === 'ArrowRight') {
        this.direction = 'right'
      }
      this.move(this.direction)
    }, true)
  }
}
class SnakeFestival extends Snake  {
  constructor(obj, el) {
    super(obj, el)
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