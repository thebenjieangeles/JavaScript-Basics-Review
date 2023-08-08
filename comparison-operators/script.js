// equal
let item = "engine";

if (item == "engine") {
  console.log("engine!");
}

// not equal
let item2 = "window";

if (item2 != "engine") {
  console.log("not engine!");
}

// example 2

let score = 61;

if (score > 60) {
  console.log("pass");
} else if (score < 10) {
  console.log("meet the teacher");
} else {
  console.log("not pass");
}

// example 3

let isEngine = item == "engine";
console.log(isEngine);

// CHALLENGE
let balance = 100;
let itemPrice = 90;
if (balance >= itemPrice) {
  balance = balance - itemPrice;
  // or balance -= itemPrice;
  console.log("item purchased");
  console.log(balance);
} else {
  console.log("not enought balance");
}
