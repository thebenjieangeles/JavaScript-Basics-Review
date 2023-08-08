let player = {
  age: 32,
  name: "Benjie",
  isActive: true,
  outfit: {
    color: "blue",
    size: "M",
    cost: 100,
    isNew: true,
  },
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.isActive = false;
console.log(player);

player.health = 100;
console.log(player);

// to delete player object properties
delete player.health;
console.log(player);

console.log(player.outfit.color);

// modify outfit color
player.outfit.color = "red";
console.log(player);

// sample on how to access properties
// -dot accessor
// player.score = 200;
// player["score"] = 200;

// Nested objects
// let player = {
//   age: 32,
//   name: "Benjie",
//   isActive: true,
//   outfit: {
//     color: "blue",
//     size: "M",
//     cost: 100,
//     isNew: true,
//   },
// };
