class Food {
  constructor(obj, el) {
    this.boxSizing = 'border-box'
    this.position = 'absolute'
    this.el = el
    this.color = obj.color || 'red'
    this.width = obj.width || 20
    this.height = obj.height || 20
    this.top = obj.top || 0
    this.left = obj.left || 0
    this.init()
  }
  init () {
    this.randomLocation()
    this.createElement()
  }
  createElement () {
    const div = document.createElement('div')
    div.style.boxSizing = this.boxSizing
    div.style.position = this.position
    
    div.style.backgroundColor = this.color
    div.style.width = this.width + 'px'
    div.style.height = this.height + 'px'
    div.style.top = this.top + 'px'
    div.style.left = this.left + 'px'


    this.el.appendChild(div)
  }
  randomLocation () {
    const width = this.el.offsetWidth - this.width
    const height = this.el.offsetHeight - this.height
    const left = Math.floor(Math.random() * width)
    const top = Math.floor(Math.random() * height)
    this.top = top
    this.left = left
    console.log('top' + top)
    console.log('left' + left)

  }
}

export { Food }