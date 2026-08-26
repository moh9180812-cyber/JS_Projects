// Challenge 4 .
// String Clallenge .

let a = "Elzero Web School";

// Include this methods in your solution [slice, charAt] .
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // --> Zero .

// 8 H .
console.log(a.charAt(13).toUpperCase().repeat(8)); // --> HHHHHHHH .

// Return Array .
console.log(a.split(" ", 1)); // --> [Elzero] .

// Use only "substr" method + template literals in your solution .
console.log(a.substr(0, 6) + a.substr(10, 17)); // --> Elzero School .

// Solution must be dynamic and string may be change .
console.log(a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.slice(-1).toLowerCase()); // --> eLZERO WEB SCHOOl .