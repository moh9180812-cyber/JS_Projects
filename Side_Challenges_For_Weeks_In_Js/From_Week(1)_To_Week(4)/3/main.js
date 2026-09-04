// Challenge 1 From Week 1 To Week 4 .
/*
  Rules
  - Transform the strings to numbers .
  - Use Number Methods in right places . 
  - Use Math Object Methods . 
  - Dont Write Numbers Directly In The Code .
  - Use Variables in Code .
  Output
  - Number 1: 25.75
  - Number 2: -8
  - Number 3: 4.6

  - Number 1 Rounded: 26
  - Number 2 Absolute: 8
  - Number 3 Floor: 4
  - Number 3 Ceil: 5

  - Max: 25.75
  - Min: -8

Random Number: [Random Number]
*/

let num = "25.75";
let num2 = "-8";
let num3 = "4.6";
// console.log(+num3)
console.log(`Number 1: ${parseFloat(num)}
Number 2: ${Math.trunc(num2)}
Number 3: ${+num3}

Number 1 Rounded: ${Math.round(num)}
Number 2 Absolute: ${Math.abs(num2)}
Number 3 Floor: ${Math.floor(num3)}
Number 3 Ceil: ${Math.ceil(num3)}

Max: ${Math.max(+num, +num2, +num3)}
Min: ${Math.min(+num, +num2, +num3)}

Random Number: ${Math.random()}`);