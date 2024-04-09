import Enemy from './Enemy'
import spriteImage from "./assets/images/fladd.png"
import spriteImage2 from "./assets/images/fladd2.png"

export default class Slime extends Enemy {
  constructor(game) {
    super(game)
    this.width = 48
    this.height = 35
    this.x = this.game.width
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.speedX = Math.random() * -1.5 - 0.5
    this.lives = 2

    const img = new Image;
    img.src = spriteImage
    this.image = img

    const img2 = new Image;
    img2.src = spriteImage2

    this.placeholder = 0;
    this.placeholder2 = 0;
    this.image1 = img;
    this.image2 = img2;

    this.resetSlime();
  }
  resetSlime() {
    this.x = this.game.width;
    this.y = Math.random() * (this.game.height * 0.9 - this.height);
    this.speedX = Math.random() * -1.5 - 0.5;
  }

  draw(context) {
    //context.fillStyle = '#ff00ff';
    //context.fillRect(this.x, this.y, this.width, this.height);
    if (this.placeholder > 20){
      if(this.placeholder2 === 0){
        this.image = this.image1;
        this.placeholder2++
      }
      else if (this.placeholder2 === 1){
        this.image = this.image2;
        this.placeholder2--;
      }
      this.placeholder = 0
    }
    this.placeholder++

    context.save()

    // context.scale(-1, 1)
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
    context.restore()

    
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height)
      context.fillStyle = 'white'
      context.font = '20px Arial'
      context.fillText(this.lives, this.x, this.y - 5)
      context.font = '12px Arial'
      context.fillText(`x: ${this.x.toFixed()}`, this.x + 20, this.y - 5)
      context.fillText(`y: ${this.y.toFixed()}`, this.x + 20, this.y - 20)
    }
  }
}