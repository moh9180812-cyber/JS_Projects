// Edit The Class
class User {
  #c;  
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  cardNum () {
    return String(this.#c).split("-").join("").slice(0, 4) +"-"+   String(this.#c).split("-").join("").slice(4, 8)+"-"+   String(this.#c).split("-").join("").slice(8, 12)+"-"+  String(this.#c).split("-").join("").slice(12, 16)
  }
}


// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

User.prototype.showData = function () {
    return `Hello ${this.u} Your Card Number Is ${this.cardNum()}`
}


console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined