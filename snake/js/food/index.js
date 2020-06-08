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
  }
  createElement () {
    const div = document.createElement('div')
    div.style.boxSizing = this.boxSizing
    div.style.position = this.position
    div.style.top = this.top + 'px'
    div.style.left = this.left + 'px'
    div.style.backgroundColor = this.color
    div.style.width = this.width + 'px'
    div.style.height = this.height + 'px'
    this.el.appendChild(div)
  }
}

export { Food }