// 1. select by ID

let sign = document.getElementById("sign");

// 2. modify
console.log(sign.textContent);
// modify text
sign.textContent = "Welcome, travelers!";

// modify
// sign.innerHTML = "<p>hello</p>";
// or
// sign.innerHTML = sign.innerHTML + "<p>hello</p>";

// 3. change style

sign.style.color = "green";
