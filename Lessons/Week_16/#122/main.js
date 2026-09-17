/*
  Destructuring
  - Challenge
*/

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [one,two,three] = myFriends;

let {title: name1,age: age1,available: av1,skills: [,a1] } = one;
let {title: name2,age: age2,available: av2,skills: [,a2] } = two;
let {title: name3,age: age3,available: av3,skills: [,a3] } = three;


if (chosen === 1) {
  console.log(name1)
  console.log(age1)
  if (av1 === true) {
    console.log(`Available`);
  }
  else if (av1 === false) {
    console.log(`Not Available`);
  }
  console.log(a1);
}
else if (chosen === 2) {
  console.log(name2)
  console.log(age2)
  if (av2 === true) {
    console.log(`Available`);
  }
  else if (av2 === false) {
    console.log(`Not Available`);
  }
  console.log(a2);
}
else if (chosen === 3) {
  console.log(name3)
  console.log(age3)
  if (av3 === true) {
    console.log(`Available`);
  }
  else if (av3 === false) {
    console.log(`Not Available`);
  }
  console.log(a3);
}