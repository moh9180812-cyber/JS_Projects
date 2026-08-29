let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let r = numsAndStrings.filter(function (el) {
    return !isNaN(el) ? el : "";
}).map(function (el) {
    return -el;
});
console.log(r);
// [-1, -10, 10, 20, -5, -3]