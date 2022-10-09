import { Tools } from "./Tools.js"
export class Hero {
  x = 100
  y = 400
  w = 35
  h = 50
  rise = false
  draw() {
    let img = new Image()
    img.src = "img/mario.png"
    if (this.rise) {
      this.y -= 15
      if (this.y < 200) {
        this.rise = false
      }
    } else {
      if (this.y < 450) this.y += 15
    }
    img.onload = () => Tools.ctx.drawImage(img, this.x, this.y, this.w, this.h)
  }
}
