// Challenge 1 From Week 1 To Week 4 .
/*
  Rules
  - Use String Methods .
  - Do not repeat this text ("JavaScript Is Amazing") .
  - Full Name Shoud complete by first/last name variables .
  - clean the message by removing extra spaces from both sides .
  - Count the length .
  Output
  - Full Name: Mohamed Osama
  - Original Message:    JavaScript Is Amazing   
  - Clean Message: JavaScript Is Amazing
  - Message Length: 21
  - First Character: J
  - Last Character: g
  - Uppercase: JAVASCRIPT IS AMAZING
  - Lowercase: javascript is amazing
*/

let firstName = "Mohamed";
let lastName = "Osama";
let message = "   JavaScript Is Amazing   ";

console.log(`Full Name: ${firstName} ${lastName}
Original Message: ${message}
Clean Message: ${message.trim()}
Message Length: ${message.trim().length}
First Character: ${message.trim()[0]}
Last Character: ${message.trim()[message.trim().length - 1]}
UpperCase: ${message.trim().toUpperCase()}
LowerCase: ${message.trim().toLowerCase()} `);