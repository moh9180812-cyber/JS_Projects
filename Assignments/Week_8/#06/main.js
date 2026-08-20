function multiply(...arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result = result * Math.trunc(arr[i]);
        }else if (typeof arr[i] === "string") {
            continue;
        }
    }
    console.log(result);
} 

multiply(10, 20); // 200
multiply("A", 10, 30, "llll", 222222); // 300
multiply(100.5, 10, "B"); // 1000