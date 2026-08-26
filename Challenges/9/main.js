// Challenge 9 .
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
function showDetails(...details){
   let name;
   let age;
   let status;
   for (let i = 0; i < details.length ; i++) {
     // if (typeof details[i] === "string") {
     //   name = details[i] ;
     // }
     // else if (typeof details[i] === "number") {
     //   age = details[i] ;
     // }
     // else if (typeof details[i] === "boolean") {
     //   status = details[i] ;
     //   status = details[i] ? "Available" : "Not Available";
     // }
     typeof details[i] === "string"
       ? name = details[i] 
        : typeof details[i] === "number"
        ? age = details[i] 
         : typeof details[i] === "boolean"
         ? status = details[i] ? "Available" : "Not Available" 
          : "not dddd"; 
   }
  console.log(`Hello ${name}, Your age is ${age}, You Are ${status} For Hire`);
}

showDetails("Osama", 39, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"