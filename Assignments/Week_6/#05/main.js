let needle = "Js";
let haystack = ["PHP", "Js", "Python"];

// Write 3 Solutions
// One
if (haystack.includes(needle) == true) {
    console.log("Found");
}else {
    console.log("Not Found");
}
// Two
if (haystack[0] == needle || haystack[1] == needle || haystack[2] == needle) {
    console.log("Found");
}else {
    console.log("Not Found");
}
// Three
if (haystack.indexOf(needle) == 1) {
    console.log("Found");
}else {
    console.log("Not Found");
}