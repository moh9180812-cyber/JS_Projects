let startPoint = new Date();

for (let i = 0; i < 100000 ; i++) {
    console.log(`Num is ${i}`);
}

let endPoint = new Date();

let time = endPoint - startPoint;

console.log(`Loop Took ${time} Milliseconds.`)