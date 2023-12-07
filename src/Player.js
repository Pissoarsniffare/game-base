import Projectile from "./Projectile";
import spriteImage from "./assets/images/karak.png"

export default class Player {
    constructor(game) {
        this.game = game;
        this.width = 64;
        this.height = 64;
        this.x = 50;
        this.y = 100;
        this.speedX = 0
        this.speedY = 0
        this.maxSpeed = 10
        this.projectiles = []

        const img = new Image;
        img.src = spriteImage
        this.image = img
    }

    update(deltaTime) {
        if (this.game.keys.includes('w')) {
            this.speedY = -this.maxSpeed;
        } else if (this.game.keys.includes('s')) {
            this.speedY = this.maxSpeed;
        } else {
            this.speedY = 0;
        }
        if (this.game.keys.includes('a')) {
            this.speedX = -this.maxSpeed;
        } else if (this.game.keys.includes('d')) {
            this.speedX = this.maxSpeed;
        } else {
            this.speedX = 0;
        }
        this.x += this.speedX
        this.y += this.speedY
        this.projectiles.forEach((projectile) => {
            projectile.update()
        })
        this.projectiles = this.projectiles.filter(
            (projectile) => !projectile.markedForDeletion
        )
        if (this.x <= 0) {
            this.x = 0
        }
        if (this.x >= 854) {
            this.x = 784
        }
        if (this.y <= 0) {
            this.y = 0
        }
        if (this.y >= 330)
            this.y = 330
    }

    draw(context) {
        //context.fillStyle = '#ff00ff';
        //context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        this.projectiles.forEach((projectile) => {
            projectile.draw(context)   
        })
        if (this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.fillStyle = 'black'
            context.font = '12px Arial'
            context.fillText(this.frameX, this.x, this.y - 5)
          }
    }

    shoot() {
        this.projectiles.push(
          new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
        )
      }
}
