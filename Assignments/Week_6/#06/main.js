let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1 = arr1.splice(-(arr1.length - 2));
console.log(arr1);
arr2 = arr2.splice(-(arr2.length - 2));
console.log(arr2);
allArrs = arr2[0].concat(arr1, arr2[1]);
allArrs = allArrs.toLowerCase();

console.log(allArrs); // fxy