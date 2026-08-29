let myArray = ["E", "l", "z", ["e", "r"], "o"];

let r = myArray.reduce(function (acc , current, i) {
    return typeof current === "string" ? acc + current : acc + current.join("");
});
console.log(r);
// Elzero