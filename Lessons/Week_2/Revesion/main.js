// Data Types 
        /* String */
    console.log(typeof "ali");

        /* Number */
    console.log(typeof 10);
    console.log(typeof 10.55);

        /* Object (Array) */
    console.log(typeof ["ali" , "alaa" , "waleed"]); // --> Object .           
    console.log(typeof [10 , "alaa" , "waleed"]); // --> Object .           
    console.log(typeof [10 , 20 , 30]); // --> Object .           
    console.log(typeof {name : "ali",age : 20,country : "Egypt"}); // --> Object .
    console.log(typeof null); // --> Object .

        /* Boolean */
    console.log(typeof true); // --> Boolean .               
    console.log(typeof false); // --> Boolean .

        /* Undefined */
    console.log(typeof undefined); // --> Undefined .

// Identifiers Name Conventions And Rules .
//var my name = "Mohamed"; // --> Wrong .
var myName = "Mohamed"; // --> Right .

//var 1name = "Ali"; // --> Wrong .
var name = "Ali"; // --> Right .

// Var, Let, Const Compare .
            /* Var */
        /*
        - Redeclare (Yes) . // let me change the value in variable .
        - Access Before Declare (No) .
        - Variable Scope Drama (Yes) . // Let the value save in window ,that's mean you can use the variable in console .
        */    
        var varName = "Ali";
    //    var varName = "li"; // (Yes) .
        console.log(varName);

            /* Let */
        /*
        - Redeclare (No) .
        - Access Before Declare (No) .
        - Variable Scope Drama (No) .
        */
        let letName = "Ali";
  //      var varName = "li"; // (No) .
        console.log(letName);

            /* Const */
        /*
        - Redeclare (No) .
        - Access Before Declare (No) .
        - Variable Scope Drama (No) .
        */
        const constName = "Ali";
//        var varName = "li"; // (No) .
        console.log(constName);

// String syntax & Chars Escape Sequences .
//console.log("Mohamed "Ali""); // --> Wrong .
//console.log('Mohamed 'Ali''); // --> Wrong .

console.log("Mohamed 'Ali'"); // --> Right .
console.log('Mohamed "Ali"'); // --> Right .
//Or
console.log("Mohamed \"Ali\""); // --> Right .     
            /* New Line */
//        console.log("Mohamed
//                            Ali"); // --> Wrong .
        console.log("Mohamed \nAli");

            /* Concatination */
        let a = "age";
        let n = 19;
        console.log(a + " " + "is" + " " + n); // Concatination in Old System .
        console.log(`${a} is ${n}`); // Concatination in New System (ES6) .    


