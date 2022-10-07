import { Tools } from "./Tools.js"
export class Hero {
  x = 100
  y = 400
  w = 70
  h = 100
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
      if (this.y < 400) this.y += 15
    }
    img.onload = () => Tools.ctx.drawImage(img, this.x, this.y, this.w, this.h)
  }
}
