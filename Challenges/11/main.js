// Challenge 11 .
let students = [
  "Ahmed:200",
  "Mohamed:42",
  "Ali:73",
  "Omar:95",
  "Sayed:28",
  "Hassan:61",
  "Mohamed:100",
  "Osama:100",
  "Mohamed:10"
];

function analyzeStudents(students) {
  let p = 0;
  let f = 0;
  let av = 0;
  let total = 0;
  let arr = [];
  let arrE = [];
  let maxS;
  let minS;
  for (let i = 0; i < students.length; i++) {
   let grad = students[i].split(":");
   if (grad[1] >= 50) {
    p += 1;
   }else if (grad[1] < 50) {
    f += 1;
   }
   arr.push(grad[1]);
  }

  for(let k = 0; k < arr.length; k++) {
   arrE.push(parseInt(Number(arr[k])));
  }

  let num = arrE.length;

  for (let r = 0; r < arrE.length; r++) {
    total += arrE[r];
  }

  av = total / num ;
  let max = arrE[0];
  let min = arrE[0];

  for(let l = 0; l < arrE.length; l++) {
   let grad = students[l].split(":");

   if (arrE[l] > max) {
    max = arrE[l];
   }
   else if (arrE[l] < min) {
    min = arrE[l];
   }
  }
  for (let n = 0; n < students.length; n++) {
        let grad = students[n].split(":");
        if (Number(grad[1]) === max) {
            maxS = grad[0];
        }

        if (Number(grad[1]) === min) {
            minS = grad[0];
        }
    }
  console.log(`Students : ${students.length}`);
  console.log(`Passed : ${p}`);
  console.log(`Failed : ${f}`);
  console.log(`Highest : ${maxS} => His Degree Is : ${max}`);
  console.log(`Lowest : ${minS} => His Degree Is : ${min}`);
  console.log(`Average : ${parseInt(av)}%`);
}
console.log(analyzeStudents(students));
