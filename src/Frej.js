import Enemy from './Enemy'

export default class FinalBoss extends Enemy {
  constructor(game) {
    super(game);
    this.width = 128;
    this.height = 128;
    this.x = game.width;
    this.y = Math.random() * (game.height * 0.9 - this.height);
    this.speedX = -2; 
    this.lives = 100; 
  }
}