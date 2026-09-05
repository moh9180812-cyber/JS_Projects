// Number && String Methods .

        /* Number */
/*
    Suntactic Sugar "_" 
    - console.log(1000000); --> 1000000 .
    - console.log(1_000_000); --> 1000000 .
    - console.log(1e6); --> 1000000 .

    toString() --> Transform the number to string .
    toFixed() --> Selecting count of numbers after (.) .
    parseInt() --> Research about the Integer after string in the value .
    parseFloat() --> Research about Float in the value .
    isInteger() --> Analyzes the value if it found integer it return true .
    isNaN() --> Analyzes the value if it not found number it return true .
*/    
let a = 10 ;
console.log(a.toString()); console.log(10.1211212.toFixed(2)); console.log(parseInt("1mmm21"));

        /* Math Object */
/*
    Math.ceil() --> 0.5 or 0.6 or 0.4 --> 1 .
    Math.round() --> 0.5 or 0.6 --> 1 . && 0.4 --> 0 . 
    Math.floor() --> 0.5 or 0.6 or 0.4 --> 0 . 
    Math.max() --> Return high value .
    Math.min() --> Return less value .
    Math.pow() --> num is the power of another num .
    Math.random() --> Return random number .
    Math.trunc() --> Return the int part in number .
*/        
console.log(`${Math.ceil(0.4)} ${Math.ceil(0.5)} ${Math.ceil(0.6)}`); 
console.log(`${Math.round(0.4)} ${Math.round(0.5)} ${Math.round(0.6)}`);
console.log(`${Math.floor(0.4)} ${Math.floor(0.5)} ${Math.floor(0.6)}`);

console.log(Math.max(10, 20, 5));
console.log(Math.min(10, 20, 5));

console.log(Math.pow(2, 4));

console.log(Math.random());

console.log(Math.trunc(10.4444)); 

         /* Strinbg Methods */
/*
    [i] --> Access with index .
    charAt(i) --> Access with charAt() .
    Length --> Determine the count of chars in string or array .
    trim() --> Cut free spaces from string .
    toUpperCase() --> Transform chars of string to UpperCase .
    toLowerCase() --> Transform chars of string to LowerCase .
    Chain Method --> Cocatenate more than one method .
    indexOf() --> Return index of value what you want .
    lastIndexOf() --> Return index of value what you want but it start to research form the end .
    slice() --> Cut parts from string by give it start , end index .
    repeat() --> Repeat value more than one time by give it num of times .
    split() --> Transform value to array .
    subString() --> Cut parts from string like slice() but if start index less than end it make start end and end start .
    subStr() -->  Cut parts from string like slice() but by different method by give it start index , num of chars .
    includes() --> Research about the value what you want if the string contain it  it will return true else return false .
    startWith() --> Research about the value what you want if the string start with it  it will return true else return false .
    endWith() --> Research about the value what you want if the string end with it  it will return true else return false .
*/         
let n = "Mohamed";
let nS ="   Mohamed   ";
console.log(n[0]); console.log(n.charAt(1)); console.log(n.length);
console.log(nS.trim()); console.log(n.toUpperCase()); console.log(n.toLowerCase()); 
console.log(n[2].toUpperCase()); console.log(n.indexOf("d")); console.log(n.lastIndexOf("d"));
console.log(n.slice(1, 5)); console.log(n[0].repeat(5)); console.log(n.split(""));
console.log(n.substring(6, 1)); console.log(n.substr(1, 4)); console.log(n.includes("M"));
console.log(n.startsWith("L")); console.log(n.endsWith("d"));
