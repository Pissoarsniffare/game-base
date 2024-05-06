export default class slimeboom {

    constructor(game, x, y) {
        this.game = game
        this.width = 4
        this.height = 4
        this.x = x
        this.y = y
        this.speed = 5
        this.damage = 1
        this.markedForDeletion = false

        this.speedX = Math.random() * 100 - Math.random() * 100
        this.speedY = Math.random() * 100 - Math.random() * 100
      }

      update() {
        this.x += this.speedX
        if (this.x > this.game.width) {
          this.markedForDeletion = true
        }
        this.y += this.speedY
        if (this.y > this.game.width) {
            this.markedForDeletion = true
        }
    }

      draw(context) {
        context.fillStyle = '#65ff00'
        context.fillRect(this.x, this.y, this.width, this.height)
      }
}
