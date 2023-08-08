let player = {
  health: 100,
  fun: 0,

  eat: function (food) {
    if (food == "apple") {
      console.log("Ate apple");
      this.health += 10;
    } else if (food == "candy") {
      console.log("Ate candy");
      this.health += 10;
      this.fun += 5;
    }
  },
  play: function () {
    console.log("you played");
    this.fun += 10;
    console.log(this.fun);
  },
};

// player.eatApple();
// console.log(player);
// player.play();

console.log(player);
player.eat("apple");
console.log(player);
player.eat("candy");
console.log(player);
