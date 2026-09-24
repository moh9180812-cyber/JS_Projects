let theNumber = 100020003000;
let newSet = new Set([...(theNumber.toString())]);
newSet.delete("0");
console.log(+([...newSet].join("")))
// Needed Output
// 123