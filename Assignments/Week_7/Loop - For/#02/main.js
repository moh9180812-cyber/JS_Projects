let start = 10;
let end = 0;
let stop = 3;

// Output
/*
10
09
08
07
06
05
04
03
*/

let i = start;
for (; i > end ; i-- ) {
    if (i < start) {
    console.log(`${end}${i}`);
    }
    else {
        console.log(`${i}`);
    }
    if(i == stop) {
        break;
    }
}