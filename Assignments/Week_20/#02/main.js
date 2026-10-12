let dateNow = new Date();
dateNow.setTime(1000)
dateNow.setHours(0)
dateNow.setFullYear(1980)
console.log(dateNow);

// Another Solution 
let startDate = new Date(1980, 0, 1, 0, 0, 1)
console.log(startDate)