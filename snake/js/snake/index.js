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
    this.direction = 'right'
    this.step = obj.step || 10
    this.speed = obj.speed || 1000
    this.el = el
    this.ele = null
    this.body = [
      {
        x: 40,
        y: 0,
        color: 'green'
      },
      {
        x: 20,
        y: 0
      },
      {
        x: 0,
        y: 0
      }
    ]
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
    this.drawSnake(div)
    this.el.appendChild(div)
  }
  drawSnake (el) {
    this.body.forEach(snakeFestival => {
      new SnakeFestival(snakeFestival, el)
    })
  }

  move (direction) {
    this.direction = direction
    let axyis = this.getSnakeHeadCoordinate()
    console.log(axyis)
    let snakeHead = axyis[0]
    snakeHead.color = 'green'
    if (
      (this.direction === 'left' && snakeHead.x > 0) || 
      (this.direction === 'right' && snakeHead.x < this.el.offsetWidth) ||
      (this.direction === 'top' && snakeHead.y > 0) ||
      (this.direction === 'bottom' && snakeHead.y < this.el.offsetHeight)
      ) {
        this.x = snakeHead.x
        this.y = snakeHead.y
        this.body = axyis
        this.drawSnake(this.ele)
    }
    else {
      clearInterval(this.interval)
      alert('游戏结束!!!')
    }
  }
  getSnakeHeadCoordinate () {
    const body = JSON.parse(JSON.stringify(this.body))
    let tempArr = body.map(item => {
      
      if (this.direction === 'right') {
        item.x += this.step
        item.y = this.y
      }
      else if (this.direction === 'left') {
        item.x -= this.step
        item.y = this.y
      }
      else if (this.direction === 'top') {
        item.y -= this.step
        item.x = this.x
      }
      else if (this.direction === 'bottom') {
        item.y += this.step
        item.x = this.x
      }
      return item
    })
    // console.log(tempArr)
    return tempArr
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
      const nodes = this.ele.childNodes
      if (nodes.length > 0) {
        for (var i = nodes.length - 1; i >= 0; i--) {
          this.ele.removeChild(nodes[i]);
        }
      }
      this.move(this.direction)
    }, true)
  }
}
class SnakeFestival extends Snake  {
  constructor(obj, el) {
    super(obj, el)
    this.x = obj.x || 0
    this.y = obj.y || 0
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