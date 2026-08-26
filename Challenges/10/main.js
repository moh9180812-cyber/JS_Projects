// Challenge 10 . 
/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
// regular .
// let names = function (...ns) {
//   // Parameter ?
//   return `String ${ns.map(n => `[${n}]`).join(", ")} => Done !`;
// };

// Arrow .
let names =  (...ns) => `String ${ns.map(n => `[${n}]`).join(", ")} => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums[0];

console.log(calc(10, myNumbers[2], myNumbers[3])); // 80