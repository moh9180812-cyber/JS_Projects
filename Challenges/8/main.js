// Challnge 8 .
/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);
let i = 0;
for (; i < myAdmins.length ; i++) {
    if (myAdmins[i] === "Stop") {
      break;
    }
}
document.write(`<div>We Have ${i} Admins</div>`);
document.write(`<hr>`);
for (let j = 0; j < i ; j++) {
  document.write(`<div>`);
  document.write(`The Admin For Team ${j + 1} Is ${myAdmins[j]}`);
  document.write(`<h3>Team Members:</h3>`);
  let a = 1;
   for (let k = 0; k < myEmployees.length ; k++) {
     if(myAdmins[j][0] === myEmployees[k][0]) {
         document.write(`<p>- ${a} ${myEmployees[k]}</p>`);
         a++;
     }
     }
  
  document.write(`</div>`);
  document.write(`<hr>`);
}