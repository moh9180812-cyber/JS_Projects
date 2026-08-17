let start = 0;
let swappedName = "elZerO";
let result = "";

// Output
// "ELzERo"
let i = start;
for ( ;i < swappedName.length ; i ++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        result += swappedName[i].toLowerCase(); 
    }else  {
        result += swappedName[i].toUpperCase();
    }
    
}
console.log(result);

// Another Way .

for (let j = 0; j < swappedName.length; j++) {
  if (swappedName[j] === swappedName[j].toLowerCase()) {
    swappedName = swappedName.slice(start, j) + swappedName[j].toUpperCase() + swappedName.slice(j + 1);
  } else {
    swappedName = swappedName.slice(start, j) + swappedName[j].toLowerCase() + swappedName.slice(j + 1);
  }
}

console.log(swappedName); // hEllO