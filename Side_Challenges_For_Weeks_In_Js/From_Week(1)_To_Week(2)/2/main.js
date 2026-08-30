// Challenge 2 From Week 1 To Week 2 .
/*
  Rules
  - Use Only Variables To Use The Numbers .
  - Do Not Write Numbers (750, 700, 98) By Yourself .
  Output
  - "Total Before Discount: 750" .
  - "After Discount: 700" .
  - "Tax: 98" .
  - "Final Price: 798" .
*/

let price = 250;
let quantity = 3;
let discount = 50;
let tax = 14;
console.log(`Total Before Discount: ${price * quantity}`);
console.log(`After Discount: ${price * quantity - discount}`);
console.log(`Tax: ${(price * quantity - discount) * tax / 100 }`);
console.log(`Final Price: ${(price * quantity - discount) * tax / 100 + (price * quantity - discount)}`)