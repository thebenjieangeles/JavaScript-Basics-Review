let database = ["turtle", "cat", "dog", "bird"];

console.log(database);
console.log(database.length);

let animal = database[1];
console.log(animal);

database[0] = "dinosaur";
console.log(database);

let last = database[database.length - 1];
console.log(last);

// to add to array
database.push("lizard");
console.log(database);

// to remove last element from the array
database.pop();
console.log(database);
