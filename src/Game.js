import { Tools } from "./Tools.js"
import { Hero } from "./Hero.js"
import { AntiHero } from "./AntiHero.js"
export class Game {
  constructor() {
    document.body.onkeydown = (e) => {
      if (e.code == "Space") {
        e.preventDefault()
        this.mario.rise = true
      }
    }
  }
  x = -300
  mario = new Hero()
  antagonists = [
    new AntiHero(),
    new AntiHero(true),
    new AntiHero(true),
    new AntiHero(),
  ]
  interval = null
  play() {
    this.global = requestAnimationFrame(this.run.bind(this))
    this.interval = setInterval(() => {
      this.clash()
    }, 200)
  }
  initWorld() {
    this.x -= 3.5
    if (this.x < -1000) {
      this.x = 0
    }
    let dx = 1000 - Math.abs(this.x)
    let part1 = new Image()
    part1.src = "img/overworld_bg.png"
    part1.onload = () => Tools.ctx.drawImage(part1, this.x, 0, 1000, 600)
    let part2 = new Image()
    part2.src = "img/overworld_bg.png"
    part2.onload = () => Tools.ctx.drawImage(part2, dx, 0, 1000, 600)
  }
  run() {
    this.initWorld()
    this.mario.draw()
    this.antagonists.map((elm) => elm.draw())
    this.global = requestAnimationFrame(this.run.bind(this))
  }
  clash() {
    let x1 = this.mario.x
    let y1 = this.mario.y
    this.antagonists.forEach((elm) => {
      let x2 = elm.x
      let y2 = elm.y
      if (Math.abs(y2 - y1) < 60 && Math.abs(x2 - x1) < 60) this.gameOver()
    })
  }
  gameOver() {
    cancelAnimationFrame(this.global)
    clearInterval(this.interval)
    Tools.ctx.clearRect(0, 0, Tools.canvas.width, Tools.canvas.height)
    Tools.ctx.globalCompositeOperation = "xor"
    Tools.ctx.font = "70px Tahoma"
    Tools.ctx.fillText("GAME OVER", 300, 320)
    this.initWorld()
  }
}
