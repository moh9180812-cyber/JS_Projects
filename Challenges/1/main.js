// Challenge 1 .
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/*
[++a] [+] [+b++] [+] [+c++] [-] [+a++]
[++a] --> [++] , [a] .
- Value: 11 .
- Explain: 
   [++] --> that is before [a] mean increment that is mean add 1         to the variable's value (Pre Increment) .
   [a] --> Variable .        
[+]
- Explain: Add Operator .

[+b++] --> [+] , [b] , [++] .
- Value: 20 .
- Explain: 
    [+]
     - Explain: Unary Plus .
    [b]
     - Explain: Variable .
    [++]
     - Explain: Post Increment . --> print ,then operates .

[+]
- Explain: Add Operator .

[+c++] --> [+] , [c] , [++] .
- Value: 80 .
- Explain: 
    [+]
     - Explain: Unary Plus .
    [c]
     - Explain: Variable .
    [++]
     - Explain: Post Increment . --> print ,then operates .

[+a++] --> [+] , [a] , [++] .
- Value: 11 .
- Explain: 
    [+]
     - Explain: Unary Plus .
    [a]
     - Explain: Variable .
    [++]
     - Explain: Post Increment . --> print ,then operates .     
*/

console.log(++a + -b + +c++ - -a++ + +a);

/*
[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a] .
[++a] --> [++] , [a] .
- Value: 11 .
- Explain: 
   [++] --> that is before [a] mean increment that is mean add 1         to the variable's value (Pre Increment) .
   [a] --> Variable .        
[+]
- Explain: Add Operator .

[-b] --> [-] , [b] .
- Value: -20 .
- Explain: 
    [-]
     - Explain: Unary Negation .
    [b]
     - Explain: Variable .

[+]
- Explain: Add Operator .

[+c++] --> [+] , [c] , [++] .
- Value: 80 .
- Explain: 
    [+]
     - Explain: Unary Plus .
    [c]
     - Explain: Variable .
    [++]
     - Explain: Post Increment . --> print ,then operates .

[-]
- Explain: Minus Operator .

[-a++] --> [-] , [a] , [++] .
- Value: -11 .
- Explain: 
    [-]
     - Explain: Unary Negation .
    [a]
     - Explain: Variable .
    [++]
     - Explain: Post Increment . --> print ,then operates .

[+]
- Explain: Add Operator .

[+a] --> [+] , [a] .
- Value: 12 .
- Explain:
    [+]
     - Explain: Unary Plus .
    [a]
     - Explain: Variable .
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
[--c] --> [--] , [c] .
- Value: 79 .
- Explain: 
   [--] --> that is before [a] mean increment that is mean minus 1             from the variable's value (Pre Decrement) .
   [c] --> Variable .        
[+]
- Explain: Add Operator .

[+b] --> [+] , [b] .
- Value: 20 .
- Explain: 
    [+]
     - Explain: Unary Plus .
    [b]
     - Explain: Variable .

[+]
- Explain: Add Operator .

[--a] --> [--] , [a] .
- Value: 9 .
- Explain: 
    [--]
     - Explain: Pre Decrement .
    [a]
     - Explain: Variable .

[*]
- Explain: Multiplication Operator .

[+b++] --> [+] , [b] , [++] .
- Value: 20 .
- Explain: 
    [+]
     - Explain: Unary Plus .
    [b]
     - Explain: Variable .
    [++]
     - Explain: Post Increment . --> print ,then operates . 

[-]
- Explain: Minus Operator .

[+b] --> [+] [b] .
- Value: 21 .
- Explain: 
   [+] --> Unary Plus .
   [b] --> Variable .

[*]
- Explain: Multiplication Operator .

[a]
- Value : 9 .

[+] 
- Explain: Add Operator .

[--a] --> [--] [a] .
- Value: 8 .
- Explain: 
   [--] --> Pre Decrement .
   [a] --> Variable .

 [-] 
- Explain: Minus Operator .

[+true] --> [+] [true] .
- Value: 1 .
- Explain: 
   [+] --> Unary Plus .
   [true] --> Bolean .
*/