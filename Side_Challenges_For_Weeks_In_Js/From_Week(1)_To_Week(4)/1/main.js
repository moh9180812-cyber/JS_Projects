// Challenge 1 From Week 1 To Week 4 .
/*
  Rules
  - Use Template Literals in Output .
  - Transform (discount, price, quantity) to Number before calculation .
  - Calculate Total Before Discount and Final Price .
  - Do not change the variable names and values .
  - Use thypeof to check the data one time .
  Output
  - Product: Laptop
  - Price: 1200 USD
  - Quantity: 3
  - Discount: 150 USD
  - Total Before Discount: 3600 USD
  - Final Price: 3450 USD
*/

let productName = "Laptop";
let price = "1200";
let quantity = "3";
let discount = "150";
let currency = "USD";

console.log(`Product: ${productName}
Price: ${+price} ${currency}
Quantity: ${+quantity}
Discount: ${+discount} ${currency}
Total Before Discount: ${+price * +quantity} ${currency}
Final Price: ${(+price * +quantity) - +discount} ${currency}`);