import spriteImage from "./src/assets/images/mark.png"

export default class mark {
    constructor(game) {

        this.game = game;
        this.x = 0
        this.y = 75
        this.width = 1760;
        this.height = 512;

        const img = new Image;
        img.src = spriteImage
        this.image = img

    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)

    }
}