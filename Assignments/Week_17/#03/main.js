let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

myInfo = new Map();
myInfo.set("username", "Osama")
myInfo.set("role", "Admin")
myInfo.set("country", "Egypt")
console.log(myInfo);
console.log(myInfo.size);
console.log(myInfo.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true