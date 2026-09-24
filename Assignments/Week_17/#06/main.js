// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

let zero = 0;
let numArr = [];
for (let i = 0; i < chars.length ; i++) {
  if (typeof chars[i] === "number") {
    zero += 1;
    numArr.push(chars[i]);
  }
}
let result = chars.filter(function (e) {
      return typeof e === "string" ;
})
result.unshift(...numArr);
result.copyWithin(0,zero, zero + zero)
console.log(result);