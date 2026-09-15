let rangeInp = prompt("Print Number From – To", "Example: 5-20");


rangeInp = rangeInp.split("-");
console.log(rangeInp);

for (let i = rangeInp[0]; i <= rangeInp[1] ; i++) {
  let mainDiv = document.createElement("div");
  mainDiv.style = "display: flex; flex-direction: column"
  document.body.append(mainDiv);
  console.log(i);
  let num = document.createElement("div");
  num.innerHTML = i;
  mainDiv.append(num);
}