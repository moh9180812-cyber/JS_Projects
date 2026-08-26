// Challenge 7 .
let zero = 0;
let counter = 3;
let my = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];

my = my.slice(zero, ++counter).reverse();
console.log(my); // ["Osama" , "Elham" , "Mazero" , "Ahmed"] .

console.log(my.slice(++zero, --counter)); // ["Elham" , "Mazero"] .

my.push("Elzero");
console.log(my[4]); // "Elzero" .

console.log(my[4][4] + my[4][5].toUpperCase()); // rO