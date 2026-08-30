// Challenge 3 From Week 1 To Week 2 .
/*
  Rules
  - Do Not Change Variable's Values .
  - Can Not Write New Numbers In Operators .
  - You Should Depend On The Variables .
  - This Operators ( + , - , * , / ) Available To Use .
  Output
  - Result 1: 30 .
  - Result 2: 40 .
  - Result 3: 31 .
  - Result 4: 29 .
  - Result 5: 300 .
*/

let a = 10;
let b = 20;
let c = "30";
let d = true;
let e = false;

console.log(`Result 1: ${a + b}`);
console.log(`Result 2: ${a + +c}`);
console.log(`Result 3: ${+c + +d}`);
console.log(`Result 4: ${+c - +d}`);
console.log(`Result 5: ${+c * a}`);