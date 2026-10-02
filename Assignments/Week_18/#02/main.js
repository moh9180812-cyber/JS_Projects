let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/\bos(\d+)?o\b/ig))

// Output
// ['Os10O', 'OsO', 'Os100O']