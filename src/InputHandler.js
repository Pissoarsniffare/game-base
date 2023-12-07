export default class InputHandler {

    constructor(game) {
        this.game = game
        window.addEventListener('keydown', (event) => {
            if (
                (event.key === 'w' ||
                    event.key === 's' ||
                    event.key === 'a' ||
                    event.key === 'd') &&
                this.game.keys.indexOf(event.key) === -1
            ) {
                this.game.keys.push(event.key)
            }
            if (event.key === 'f') {
                this.game.debug = !this.game.debug
            }
            if (event.key === ' ') {
                this.game.player.shoot()
            }
        })
        window.addEventListener('keyup', (event) => {
            if (this.game.keys.indexOf(event.key) > -1) {
                this.game.keys.splice(this.game.keys.indexOf(event.key), 1)
            }
        })
    }
}