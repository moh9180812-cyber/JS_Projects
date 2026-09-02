// Challenge 1 From Week 1 To Week 3 .
/*
  Rules
  - Use 
    -> If .
    -> Else If .
    -> === .
    -> Logical Operators Like (&&, ....) . 
  - Don't Use Nested If .
  Output
  - "Welcom Mohamed ."
  --> If Password or Username is wrong .
  - "Wrong Username Or Password ."
  --> If Data of User Is Correct But The Account is Not Active .
  - "Account is Not Active ."
*/

let userName = "Mohamed";
let password = 123456;
let isActive = false;

if (userName === "Mohamed" && password === 123456 && isActive === true) {
  console.log(`Hello ${userName}`);
}else if (isActive === true && userName !== "Mohamed" || isActive === true && password !== 123456) {
  console.log(`Wrong Password Or Username`);
}else if (isActive === false) {
  console.log(`Account Is Not Active`);
}
