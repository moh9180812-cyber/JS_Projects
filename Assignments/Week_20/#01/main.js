let date = Date.now();
let mybirth =  new Date("feb 1 2007");
let my = date - mybirth;

console.log(`${parseInt(my / 1000 )} Seconds`);
console.log(`${parseInt(my / 1000 / 60 )} Minutes`);
console.log(`${parseInt(my / 1000 / 60 / 60 )} Hours`);
console.log(`${parseInt(my / 1000 / 60 / 60 / 24 )} Days`);
console.log(`${parseInt(my / 1000 / 60 / 60 / 24 / 30 )} Months`);
console.log(`${parseInt(my / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);