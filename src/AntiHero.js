import { Tools } from "./Tools.js"
export class AntiHero {
  x = Tools.rand(300, Tools.canvas.width - 100)
  y = 450
  w = 50
  h = 70
  dx = Tools.rand(2, 8)
  photo = ""
  flying = false
  constructor(flying) {
    this.flying = flying
    if (this.flying) {
      this.photo = "img/antihero.png"
      this.y = Tools.rand(100, 280)
    } else {
      this.w = 50
      this.h = 50
      this.photo = "img/antihero2.png"
    }
  }
  draw() {
    let img = new Image()
    img.src = this.photo
    this.move()
    img.onload = () => Tools.ctx.drawImage(img, this.x, this.y, this.w, this.h)
  }
  move() {
    this.x -= this.dx
    if (this.x < 0) {
      this.x = Tools.canvas.width + 100
      this.dx = Tools.rand(2, 8)
      if (this.flying) {
        this.y = Tools.rand(100, 280)
      }
    }
  }
}
