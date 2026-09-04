// Challenge 1 From Week 1 To Week 5 .
/*
  Content
  - Arithmetic Operators .
  - Unary Plus.
  - Assignment Operators .
  - Comparison .
  - Logical Operators .
  - If .
  - Ternary .
  - Switch .
  - Template Literals .
  Rules
  - Transform price and discount to Numbers .
  - If isMemebrt = true print (Memeber) else  print (Regular Customer) .
  - Use Ternary Operator .
  - The value of paymentMethod able to equal (visa, mastercard, cash) use switch statement to transform it to (Visa, Mastercard, Cash) else if not found print (Unknown Payment Method) .
  - Add condition if final price >= 3000 and user is member print (Free Shipping) else print (Shipping Frees Apply) .
  - Use Logical Operators with if conditions .
  Output
  - Product: Laptop
  - Quantity: 3
  - Price: 1200 USD
  - Subtotal: 3600 USD
  - Discount: 100 USD
  - Final Price: 3500 USD
  - Payment: Visa
  - Customer Type: Member
*/

let product = "Laptop";
let price = "1200";
price = +price;
let quantity = 3;
let discount = "100";
discount = +discount;
let currency = "USD";

let paymentMethod = "cash";
let isMember = true;

let shipping;

switch (paymentMethod) {
  case "visa":
    paymentMethod = "Visa";
    break;
  case "cash":
    paymentMethod = "Cash";
    break;
  case "mastercard":
    paymentMethod = "Mastercard";
    break;
  default:
    paymentMethod = "Unknown Payment Method";  
}
if ((price * quantity - discount) >= 3000 && isMember === true) {
  shipping = `Free Shipping`;
}else {
  shipping = `Shipping Frees Apply`;
}

console.log(`Product: ${product}
Quantity: ${quantity}
Price: ${price} ${currency}
Subtotal: ${price * quantity} ${currency}
Discount: ${discount} ${currency}
Final Price: ${(price * quantity) - discount} ${currency}
Payment Method: ${paymentMethod}
Customer Type: ${isMember === true ? "Member" : "Regular Customer"}
${shipping}`);

