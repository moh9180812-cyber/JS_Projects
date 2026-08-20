function checkStatus(a, b, c) {
    let arr = [a, b, c];
    for (let i = 0; i < arr.length; i++) {
        // if (typeof arr[i] === "string") {
        //     a = arr[i];
        // }
        // else if (typeof arr[i] === "number") {
        //     b = arr[i];
        // }
        // if (typeof arr[i] === "boolean") {
        //     c = arr[i];
        //     if (c === true){
        //         c = "Available";
        //     }else if (c === false) {
        //         c = "Not Available";
        //     }else {
        //         c = null;
        //     }
        // }
        typeof arr[i] === "string" 
        ? a = arr[i]
            : typeof arr[i] === "number"
            ? b = arr[i]
                : typeof arr[i] === "boolean"
                ? c = arr[i] ? "Available" : "Not Available" : null ;
    }
    console.log(`Hello ${a}, Your age is ${b}, You Are ${c} to hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"