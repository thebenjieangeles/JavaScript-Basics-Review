function sendSignal() {
  console.log("HELP");
}

let i = 0;

while (i < 1000) {
  sendSignal();
  // i + i + 1;
  // or
  // i += 1;
  // or
  i++;
}

// result = 1000

// new exampe

let result = 0;

let j = 1;

while (j <= 10) {
  result = result + j;
  j++;
}

console.log(result);

// result = 55
