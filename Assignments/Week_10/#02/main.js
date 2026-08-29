let myString = "EElllzzzzzzzeroo";

let filter = myString.split("").filter(function (el, i) {
    return myString.indexOf(el) === i ? el : "";
}).join("");
console.log(filter);
// Elzero
// The idea of solution is function do this (if index of element in myString equal index of element in filter function it will return element else return nothing) .