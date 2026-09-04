// Challenge 1 From Week 1 To Week 5 .
/*
  Rules
  - Transform age from string to number  .
  - If the value of job is null print (Not Available) .
  - Use Nullish coalescing operator .
  - If isStudent equal true print (Student) .
  - Else if false print (Not Student) .
  - Use Ternary Operator .
  - Use if or ternary to defined if accountActive is Active or Not Active .
  - Print Output By Templat Literal .
  - Do not use (Functions - Arrays - Loops - Objects) .
  Output
  - User: Mohamed
  - Age: 19
  - Country: Egypt
  - Job: Not Available
  - Status: Student
  - Account: Active
*/

let userName = "Mohamed";
let age = "19";
let country = "Egypt";
let job = null;
let isStudent = true;
let accountActive = true;


console.log(`User: ${userName}`);
console.log(`Age: ${+age}`);
console.log(`Country: ${country}`);
console.log(`Job: ${job ?? "Not Available"}`);
console.log(`Status: ${isStudent === true ? "Student" : "Not Student"}`);
console.log(`Account: ${accountActive === true ? "Active" : "Not Active" }`);
