let startDate = new Date(2022, 3, 30, 18, 13, 20)
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(startDate);
console.log(`Previous Month Is ${months[startDate.getMonth()]} And Last Day Is ${startDate.getDate()}`);
// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"