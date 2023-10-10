import Player from './Player.js'
import InputHandler from './InputHandler.js'
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new InputHandler(this)
    this.keys = []
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
    this.player = new Player(this)
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime

    }
    this.player.update(deltaTime)
  }

  draw(context) {
    this.player.draw(context)
    this.userInterface.draw(context)
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height)
      context.fillStyle = 'black'
      context.font = '12px Arial'
      context.fillText(this.frameX, this.x, this.y - 5)
      this.userInterface.draw(context)
    }

    context.restore()
  }
}
