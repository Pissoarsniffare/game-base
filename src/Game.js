import Slime from './Slime.js'
import Frej from './Frej.js'
import InputHandler from './InputHandler.js'
import Player from './Player.js'
import UserInterface from './UserInterface.js'
import background from './background.js'
import mark from './mark.js'
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new InputHandler(this)
    this.ui = new UserInterface(this)
    this.keys = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
    this.gameTime = 0

    this.bg = new background

    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 1000

    this.player = new Player(this)

    this.slimesKilled = 0;

    this.mark = new mark

    this.Frej = false;
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.player.update(deltaTime)

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    }

    this.enemies.forEach((enemy) => {
      enemy.update(deltaTime)
      if (this.checkCollision(this.player, enemy)) {
        enemy.markedForDeletion = true
        this.slimesKilled++;
        this.player.hp--;
        console.log(this.player.hp)
      }



      this.player.projectiles.forEach((projectile) => {
        if (this.checkCollision(projectile, enemy)) {
          enemy.markedForDeletion = true
          projectile.markedForDeletion = true
          this.slimesKilled++;
        }
      })
    })
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)

    if (this.slimesKilled >= 5 && !this.Frej) {
      this.spawnFrej();
    }

    if (this.player.hp<=0) {
      this.gameOver = true
    }
  }

  draw(context) {
    this.bg.draw(context)
    this.mark.draw(context)
    this.ui.draw(context)
    this.player.draw(context)
    this.enemies.forEach((enemy) => enemy.draw(context))
  }

  addEnemy() {
    this.enemies.push(new Slime(this))
  }

  checkCollision(object1, object2) {
    return (
      object1.x < object2.x + object2.width &&
      object1.x + object1.width > object2.x &&
      object1.y < object2.y + object2.height &&
      object1.height + object1.y > object2.y
    )
  }

  spawnFrej() {
    this.Frej = new Frej(this);
    this.enemies.push(this.Frej);
  }
}
