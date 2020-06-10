import { Food } from '../food/index.js'

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
    this.color = 'green'
    this.step = obj.step || 20
    this.speed = obj.speed || 1000
    this.el = el
    this.ele = null
    this.body = [
      {
        x: 0,
        y: 0
      },
      {
        x: 20,
        y: 0
      },
      
      {
        x: this.x,
        y: this.y,
        color: this.color
      }
    ]
  }

  init () {
    this.createSnakeContainer()
    this.generateFood()
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
    this.body.forEach(item => {
      if (item.color) {
        delete item.color
      } 
    })
    this.body[this.body.length -1].color = this.color
    this.body.forEach(snakeFestival => {
      new SnakeFestival(snakeFestival, el)
    })
  }

  move (direction) {
    this.direction = direction
    let axyis = this.getSnakeHeadCoordinate()
    if (
      (this.direction === 'left' && axyis.x >= 0) || 
      (this.direction === 'right' && axyis.x < this.el.offsetWidth) ||
      (this.direction === 'top' && axyis.y >= 0) ||
      (this.direction === 'bottom' && axyis.y < this.el.offsetHeight)
      ) {
          this.body.splice(0,1)
          this.body.push(axyis)
          
        this.drawSnake(this.ele)
        this.eat()
    }
    else {
      clearInterval(this.interval)
      alert('游戏结束!!!')
    }
  }
  getSnakeHeadCoordinate () {
    let tempObj = {}
    if (this.direction === 'right') {
      this.x += this.step
    }
    else if (this.direction === 'left') {
      this.x -= this.step
    }
    else if (this.direction === 'top') {
      this.y -= this.step
    }
    else if (this.direction === 'bottom') {
      this.y += this.step
    }
    tempObj.x = this.x
    tempObj.y = this.y
    return tempObj
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
      this.remove()
      this.move(this.direction)
    }, true)
  }
  // 蛇 吃食物
  eat () {
    // 确定食物的位置

    const food = this.el.querySelector('.food')
    if (food) {
      const left = food.offsetLeft
      const top = food.offsetTop
      if (this.x === left && this.y === top) {
        const parentObj = food.parentNode
        parentObj.removeChild(food)
        let tempObj = {
          x: left,
          y: top
        }
        this.body.push(tempObj)
        this.remove()
        this.drawSnake(this.ele)
      }

    }
    else {
      this.generateFood()
    }
    
  }
  // 生成食物
  generateFood () {
    let food = new Food({}, this.el)
    
  }
  remove () {
    const nodes = this.ele.childNodes
      if (nodes.length > 0) {
        for (var i = nodes.length - 1; i >= 0; i--) {
          this.ele.removeChild(nodes[i]);
        }
      }
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