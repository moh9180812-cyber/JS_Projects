let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
/*
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/
let a = 1;
for (let i = 0; i < friends.length ; i++) {
    if (friends[i].startsWith(letter.toUpperCase()) == true || friends[i].startsWith(letter) == true) {
        continue;
    }
    console.log(`${a} => ${friends[i]}`);
    a++;
}