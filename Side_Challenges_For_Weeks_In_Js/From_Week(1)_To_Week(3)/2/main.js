// Challenge 1 From Week 1 To Week 3 .
/*
  Rules
  - ....
  Output
  -> If Number More Than Zero .
   --> If Numer Even .
    - "Positive Even ."
  --> If Numer Odd .
    - "Positive Odd ."  
  -> If Number Less Than Zero .
  - "Negative ."
  -> If Number Equal Zero .
  - "Zero ."
*/

let num = 27;

if (num > 0) {
  if (num % 2 === 0) {
    console.log(`Positive Even`);
  }else if (num % 2 === 1) {
    console.log(`Positive Odd`);
  }
}else if (num < 0) {
  console.log(`Negative`);
}else if (num === 0) {
  console.log(`Zero`);
}