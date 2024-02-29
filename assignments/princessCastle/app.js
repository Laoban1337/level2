class Player {
  constructor(name) {
    this.name = "";
    this.totalCoins = 0;
    this.status = "small";
    this.hasStar = "false";
  }
  setName(namePicked) {
    this.name = namePicked;
  }

  gotHit() {
    if (this.status === "small") {
      this.status = "dead";
    } else if (this.status === "big") {
      this.status = "small";
    } else if (this.status === "powered up") {
      this.status = "big";
    }
  }

  gotPowerUp() {
    if (this.status === "small") {
      this.status = "big";
    } else if (this.status === "big") {
      this.status = "powered up";
    } else if (this.status === "powered up") {
      this.hasStar = true;
      if (this.hasStar) {
        console.log("You got a star!");
      }
    } else {
      this.status = this.status;
    }
  }
  addCoin() {
    this.totalCoins++;
  }

  print() {
    console.log(
      ` Name: ${this.name} \n Status: ${this.status}  \n TotalCoins: ${this.totalCoins}`
    );
  }
}
const getRandomRange = () => Math.floor(Math.random() * 3);
let player1 = new Player();
player1.setName("Mario");
console.log(player1);

function gameLooop() {
  const rangeResult = getRandomRange();
  if (rangeResult === 0) {
    player1.gotHit();
  } else if (rangeResult === 1) {
    player1.gotPowerUp();
  } else {
    player1.addCoin();
  }
  player1.print();

  if (player1.status ==="dead") {
    clearInterval(intervalID);
    console.log("Game Over!");
  }
}
const intervalID = setInterval(gameLooop,1500);


gameLooop();