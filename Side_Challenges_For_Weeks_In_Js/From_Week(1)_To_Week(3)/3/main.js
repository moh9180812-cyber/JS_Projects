// Challenge 1 From Week 1 To Week 3 .
/*
  Rules
  - Do Not Use :
    -> Switch .
    -> Arrays .
    -> Loops .
    -> Functions .
  Output
  - "Student: Mohamed"
  - "Grade: 87"
  - "Result: B"
*/

let studentName = "Mohamed";
let grade = 69;
let result;

if (grade >= 90 && grade <= 100) {
  result = "A";
}else if (grade >= 80 && grade <= 89) {
  result = "B";
}else if (grade >= 70 && grade <= 79) {
  result = "C";
}else if (grade >= 60 && grade <= 69) {
  result = "D";
}else if (grade < 60 && grade >= 0) {
  result = "F";
}else if (grade > 100 || grade < 0) {
  result = "Invalid Grade";
}

console.log(`Student: ${studentName}
Grade: ${grade}
Result: ${result}`)