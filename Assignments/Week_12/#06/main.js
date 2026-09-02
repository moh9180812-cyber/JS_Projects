let form = document.querySelector("form");
let inNumber = document.querySelector("input[type='number']");
let inText = document.querySelector("input[type='text']");
let inSave = document.querySelector("input[type='submit']");
let results = document.querySelector(".results");



form.addEventListener("submit", function (e) {
  e.preventDefault();
  let number = inNumber.value;
  let text = inText.value;
  let type = document.querySelector("select").value;    
  results.innerHTML = "";
  for (let i = 0; i < number; i++) {
    let newElement = document.createElement(type);
    newElement.textContent = text;
    document.body.appendChild(newElement);
    newElement.setAttribute("class", "box");
    newElement.setAttribute("title", "Element");
    newElement.setAttribute("id", `id-${i + 1}`);
    results.appendChild(newElement);
  }
  document.body.removeChild(document.querySelector(".box"));
});