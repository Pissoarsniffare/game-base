import Enemy from "./Enemy";
import spriteImage from "./assets/images/frejboss.png";

export default class Frej extends Enemy {
    constructor(game) {
      super(game);
      this.width = 200;
      this.height = 200;
      this.x = this.game.width;
      this.y = Math.random() * (this.game.height * 0.9 - this.height);
      this.speedX = Math.random() * -1.5 - 0.5;
      this.hp = 50;
      this.score = 69
      this.damage = 2
  
      const img = new Image();
      img.src = spriteImage;
      this.image = img;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
      }

}