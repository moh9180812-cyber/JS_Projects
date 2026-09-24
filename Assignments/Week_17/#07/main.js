let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let r = [];
console.log(r.concat(numsOne,numsTwo))
r = [...numsOne,...numsTwo];
console.log(r)
numsOne.push(...numsTwo)
console.log(numsOne)
// Needed Output
// [1, 2, 3, 4, 5, 6]