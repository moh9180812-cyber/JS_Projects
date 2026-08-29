let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let sMix = mix.map(function (el) {
    return !isNaN(el) ? "" : el;
}).reduce(function (acc, current) {
   return acc + current;
});
console.log(sMix);
// Elzero