/* Problem 1 In JS (Count Even Numbers) . */
/*
    What I Use In This Problem :

*/
// Input :
let Numbers = [10 , 15 , 20 , 7 , 8 , 13 , 4];

// Block Of Code :
let even = Numbers.filter(function (el) {
  return el % 2 === 0;
});
console.log(`Even Numbers : ${even.length}`);

// Output :
// --> Even Numbers : 4 .