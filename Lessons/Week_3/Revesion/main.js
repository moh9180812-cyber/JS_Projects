// Operators .

        /* Arithmeitic Operators */
/*
    (+) --> Addition .  ||  (-) --> Decreasing .  ||  (*) --> Multiply .  ||  (/) --> Divition .  ||  (%) --> Quotient .  ||  (**) --> num to the power of num .

    (++) --> Increment 
       - [++num] : pre .
       - [num++] : post .
    (--) --> Decrement .
       - [--num] : pre .
       - [num--] : post .   
*/
let a = 2;
let b = 4;
let c = "10";
console.log(a + b); console.log(a - b); console.log(a * b);
console.log(a / b); console.log(a % b); console.log(a ** b);

console.log(++a); console.log(a++); 
console.log(--b); console.log(b--);


         /* Unary Plus And Negation Operators */
/*
         (+) --> Unary Plus .
         (-) --> Unary Negation .      
*/    
console.log(+c); console.log(-c);

         /* Type Coercion */
/* 
      Transform type of data from type to another type .
*/         
console.log(+c); console.log(c - a);

         /* Assignment Operators */
/*
      (+=) , (-=) , (*=) , (/=) , .....  --> Add , Minus , ..... nums from the main var or another value .
*/

a += 2; b *= 2;
console.log(a); console.log(b);