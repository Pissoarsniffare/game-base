import Bottleneck from 'bottleneck'

export default class Highscore {
  constructor(game) {
    this.game = game
    this.highscore
    this.url = "https://boiled-calico-trowel.glitch.me"
    this.limiter = new Bottleneck({
      minTime: 200 // 5 requests per second
    })


  }

  async testApi() {
    try {
      const response = await fetch('https://boiled-calico-trowel.glitch.me/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("testAPi ", data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  async postScore(score) {
    console.log("skicka score")

    const data = { score, name: "smaul" }
    console.log(score)
    await fetch(`${this.url}/score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "cors"
    })
      .then((response) => response.text())
      .then((text) => {
        console.log(text)

      })


  }

  async getScore() {
    console.log("hämta hiscore med jens kod")

    await fetch(`${this.url}/score`)
      .then((response) => response.json())
      .then((text) => {
        this.highscore = text[0].score
        console.log(this.highscore)
      })
      .catch((error) => {
        console.error(error)
      })
  }







}