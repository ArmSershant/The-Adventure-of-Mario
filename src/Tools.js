export class Tools {
  static canvas = document.querySelector("#board")
  static ctx = Tools.canvas.getContext("2d")
  static rand(b, a = 0) {
    return a + parseInt(Math.random() * (b - a))
  }
}
