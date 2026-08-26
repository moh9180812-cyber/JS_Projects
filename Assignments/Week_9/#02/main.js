// #01 .
/*
function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function
*/

// To Arrow Function .
let itsMe = () => `Iam A Normal Function`;


console.log(itsMe()); // Iam A Normal Function


// #02 .
/*
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

// To Arrow Function .
let urlCreate = (protocol, web, tld) =>  `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org