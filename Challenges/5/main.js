// Challenge 5 .

// #01
 let a = 10;
 if(a < 10) {
  console.log(10);
}
else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
}
else if (a > 40) {
  console.log("> 40");
}
else {
  console.log("Unknown");
}
// Write with ternary if syntax . 
// Solution
a < 10 
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("unknon");

// #02
let st = "Elzero Web School";
if (typeof st === typeof "34") {
  console.log("Good");
}
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
}

if ( st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}