function ageInTime(theAge) {
    let months;
    let weeks;
    let days;
    let hours;
    let minutes;
    let seconds;  
    if (theAge > 10 && theAge < 100) {
        months = theAge * 12;
        weeks = theAge * 12 * 4;
        days = theAge * 12 * 4 * 7;
        hours = theAge * 12 * 4 * 7 * 24;
        minutes = theAge * 12 * 4 * 7 * 24 * 60;
        seconds = theAge * 12 * 4 * 7 * 24 * 60 * 60;
        console.log(`${months} Months`);
        console.log(`${weeks} Week`);
        console.log(`${days} Day`);
        console.log(`${hours} Hour`);
        console.log(`${minutes} Minutes`);
        console.log(`${seconds} Secound`);
    }else {
        console.log(`Age Out Of Range`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(20); // Months Example => 456 Months