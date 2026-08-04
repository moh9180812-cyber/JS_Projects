let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * [true+true]); // 6

// Solution Three
console.log(++num + +[true + true]); // 6

// Solution Four
console.log([true + true] ** --num - [true + true]); // 6

// Solution Five
console.log(num**[true+true] - num); // 6

// Solution Six
console.log([true+true]*[true+true]+num - +true); // 6