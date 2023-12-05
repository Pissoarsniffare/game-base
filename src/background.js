export default class background {
    constructor(game) {

        this.game = game;
        this.x = -500
        this.y = 0
        this.width = 1760;
        this.height = 512;

        const img = new Image;
        img.src = "./src/assets/images/bg.png"
        this.image = img

    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)

    }
}