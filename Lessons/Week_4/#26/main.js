let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find smallest number in all vars and return integer .
console.log(parseInt(Math.max(a, b, c, d)));

// Use vars a + d one time to get the needed output .
console.log(Math.pow(a, Math.trunc(d))); //--> 10000 .

//Get integer "2" from d var with 4 methods .
console.log(Math.trunc(d)); // --> Method One .
console.log(Math.floor(d)); // --> Method Two .
console.log(Number.parseInt(d)); // --> Method Three .
console.log(Number.parseInt(d.toFixed(0))); // --> Method Four .

//Use vars b + d to get this values .
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // --> 66.67 String .
console.log(Math.round((Math.trunc(b) / Math.ceil(d)).toFixed(2))); // --> 67 Number .