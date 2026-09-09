let parentDiv = document.querySelector("body div");
let newEl = document.createElement("p");
parentDiv.append(newEl);
let word = newEl.previousSibling;
console.log(word.textContent.trim());